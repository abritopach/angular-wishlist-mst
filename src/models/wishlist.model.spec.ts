import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';
import { reaction} from 'mobx';
import { WishList, WishListItem } from './wishlist.model';

describe('WishList Model', () => {
});
it('should create a instance of a WishListItem model', () => {
    const item = WishListItem.create({
        'name': 'Chronicles of Narnia Box Set - C.S. Lewis',
        'price': 28.73,
        'image': ''
    });

    expect(item.price).toBe(28.73);
    expect(item.image).toBe('');

    item.changeName('Narnia');
    expect(item.name).toBe('Narnia');
});

it('should create a WishList', () => {
    const list = WishList.create({
        items: [
            {
                'name': 'Chronicles of Narnia Box Set - C.S. Lewis',
                'price': 28.73,
                'image': ''
            }
        ]
    });

    expect(list.items.length).toBe(1);
    expect(list.items[0].price).toBe(28.73);
});

it('should add new item to WishList', () => {
    const list = WishList.create();
    const states = [];
    onSnapshot(list, snapshot => {
        states.push(snapshot);
    });

    /*
    list.add(WishListItem.create({
        name: 'Chesterton',
        price: 10
    }));
    */
    list.add({
        name: 'Chesterton',
        price: 10
    });

    expect(list.items.length).toBe(1);
    expect(list.items[0].name).toBe('Chesterton');
    list.items[0].changeName('Book of G.K. Chesterton');
    expect(list.items[0].name).toBe('Book of G.K. Chesterton');

    /*
    expect(getSnapshot(list)).toEqual({
        items: [{
            name: 'Book of G.K. Chesterton',
            price: 10,
            image: ''
        }]
    });
    */

    // expect(getSnapshot(list)).toMatchSnapshot();

    // expect(states).toMatchSnapshot();

});

/*
it('should add new item to WishList 2', () => {
    const list = WishList.create();
    const patches = [];
    onPatch(list, patch => {
        patches.push(patch);
    });

    list.add({
        name: 'Chesterton',
        price: 10
    });

    list.items[0].changeName('Book of G.K. Chesterton');
    expect(patches).toMatchSnapshot();

});
*/

it('should calculate the total price of a wishlist', () => {
    const list = WishList.create({
        items: [
            {
                name: 'Machine Gun Preacher',
                price: 7.35,
                image: ''
            },
            {
                name: 'LEGO Mindstorms EV3',
                price: 349.95,
                image: ''
            }
        ]
    });

    expect(list.getTotalPrice()).toBe(357.3);

    let changed = 0;
    reaction(() => list.getTotalPrice, () => changed++);

    expect(changed).toBe(0);
    console.log(list.getTotalPrice());
    list.items[0].changeName('Test');
    expect(changed).toBe(0);
    list.items[0].changePrice(10);
    expect(changed).toBe(1);
});
