import { types, flow, getParent, applySnapshot, getSnapshot, onSnapshot } from 'mobx-state-tree';

import { WishList } from './wishlist.model';

import { createStorable } from './storable.model';

import AbortController from 'abort-controller';

// Cancel/abort an HTTP fetch() request using AbortController. Currently only works in Firefox & Internet Explorer.
// https://github.com/mysticatea/abort-controller
/*
const controller = new AbortController();
const signal = controller.signal;
console.log(controller);
*/

export const User = types.compose(types.model({
    id: types.identifier(),
    name: types.string,
    gender: types.enumeration('gender', ['m', 'f']),
    wishList: types.optional(WishList, {}),
    // Store reference of user (id).
    recipient: types.maybe(types.reference(types.late(() => User)))
})
.actions(self => ({
    getSuggestions: flow(function*() { // <- note the star, this a generator function!
        const response = yield window.fetch(`http://localhost:3000/suggestions_${self.gender}`);
        const suggestions = yield response.json();
        self.wishList.items.push(...suggestions);
    })/*,
    save: flow(function* save() {
        console.log('save');
        try {
            yield window.fetch(`http://localhost:3000/users/${self.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(getSnapshot(self))
            });
        } catch (e) {
            console.error('Failed to save: ' + e);
        }
    }),
    afterCreate() {
        console.log('afterCreate');
        onSnapshot(self, (self as any).save);
    }
    */
})),
createStorable('users', 'id')
);

export const Group = types.model({
    users: types.map(User)
})
.actions(self => ({
    /*
    afterCreate() {
        console.log('afterCreate');
        (self as any).load();
    },
    */
    load: flow(function* load() {
        console.log('load');

        try {
            const response = yield window.fetch(`http://localhost:3000/users`/*, { signal }*/);
            // console.log(yield response.json());
            let result = yield response.json();
            // Convert array to map.
            result = result.reduce((map, obj) => (map[obj.id] = obj, map), {});
            // console.log(result);
            applySnapshot(self.users, result);
            // applySnapshot(self.users, yield response.json());
            console.log('Success');
        } catch (e) {
            console.log('Aborted', e);
        }
    }),
    reload() {
        /*
        if ( controller ) {
            console.log('Now aborting fetch');
            controller.abort();
        }
        */
        (self as any).load();
    },
    beforeDestroy() {
        console.log('beforeDestroy');
        // if (controller) controller.abort();

    },
    drawLots() {
        // console.log('drawLots');
        const allUsers = self.users.values();
        // console.log('allUsers', allUsers);

        // Not enough users, bail out.
        if (allUsers.length <= 1) {
            return;
        }

        // Not assigned lots.
        const remaining = allUsers.slice();
        // console.log('remaining', remaining);

        allUsers.forEach(user => {
            // Edge case: the only person without recipient is the same as the only remaining lot swap lot's with some random other person.
            if ((remaining.length === 1) && (remaining[0] === user)) {
                const swapWith = allUsers[Math.floor(Math.random() * allUsers.length - 1)];
                console.log('swapWith', swapWith);
                user['recipient'] = swapWith['recipient'];
                swapWith['recipient'] = self;
            } else {
                while (!user['recipient']) {
                    // Pick random lot from remaining list.
                    const recipientIdx = Math.floor(Math.random() * remaining.length - 1);

                    // If it is not the current user, assign it as recipient and remove the lot.
                    if (remaining[recipientIdx] !== user) {
                        user['recipient'] = remaining[recipientIdx];
                        console.log(user);
                        remaining.splice(recipientIdx, 1);
                    }
                }
            }
        });
    }
}));
