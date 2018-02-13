import { types, flow, getSnapshot } from 'mobx-state-tree';

export function createStorable(collection, attribute) {

    return types.model({})
    .actions(self => ({
        save: flow(function* save() {
            console.log('save');
            try {
                yield window.fetch(`http://localhost:3001/${collection}/${self[attribute]}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(getSnapshot(self))
                });
            } catch (e) {
                console.error('Failed to save: ' + e);
            }
        })
    }));
}
