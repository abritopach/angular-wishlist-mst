import { types } from 'mobx-state-tree';

const Woman = types.model({
    id: types.string,
    name: types.string,
    gender: types.literal('f')
});

const Man = types.model({
    id: types.string,
    name: types.string,
    gender: types.literal('m')
});

const Human = types.union(Woman, Man);

const someone = Human.create({
    id: '123',
    name: 'Adrian',
    gender: 'm'
});

console.log(Man.is(someone));
console.log(Woman.is(someone));
console.log(Human.is(someone));
