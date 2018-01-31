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
