import { types } from 'mobx-state-tree';

// https://egghead.io/courses/manage-application-state-with-mobx-state-tree

const data = {
    'name': 'Chronicles of Narnia Box Set - C.S. Lewis',
    'price': 28.73,
    'image': ''
};

export const WishListItem = types.model({
    name: types.string,
    price: types.number,
    image: types.optional(types.string, '')
}).actions(self => ({

    changeName(newName) {
        self.name = newName;
    },
    changePrice(newPrice) {
        self.price = newPrice;
    },
    changeImage(newImage) {
        self.image = newImage;
    }
}));

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), []),
    // totalPrice: types.number()
}).actions(self => ({
    add(item) {
        self.items.push(item);
    }
})).views(self => ({
    getTotalPrice() {
        return self.items.reduce((sum, entry) => sum + entry.price, 0);
    }
}));

