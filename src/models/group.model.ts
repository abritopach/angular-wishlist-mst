import { types, flow, getParent } from 'mobx-state-tree';

import { WishList } from './wishlist.model';

export const User = types.model({
    id: types.identifier(),
    name: types.string,
    gender: types.enumeration('gender', ['m', 'f']),
    wishList: types.optional(WishList, {}),
    // Store reference of user (id).
    recipient: types.maybe(types.reference(types.late(() => User)))
})
.actions(self => ({
    getSuggestions: flow(function*() {
        const response = yield window.fetch(`http://localhost:3001/suggestions_${self.gender}`);
        const suggestions = yield response.json();
        self.wishList.items.push(...suggestions);
    })
}));

export const Group = types.model({
    users: types.map(User)
})
.actions(self => ({
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
