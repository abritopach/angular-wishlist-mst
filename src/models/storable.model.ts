import { types, flow, getSnapshot, onSnapshot } from 'mobx-state-tree';

export function createStorable(collection, attribute) {

    return types.model({})
    .actions(self => ({
        save: flow(function* save() {
            console.log('save');
            try {
                console.log(JSON.stringify(getSnapshot(self)));
                // yield window.fetch(`http://localhost:3001/${collection}/${self[attribute]}`, {
                yield window.fetch(`http://localhost:3001/${collection}?userID=${self[attribute]}`, {
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
            // onSnapshot(self, (self as any).save);
        }
    }));
}
