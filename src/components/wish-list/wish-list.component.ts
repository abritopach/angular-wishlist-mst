import { Component, OnInit } from '@angular/core';

import { WishList } from '../../models/wishlist.model';

import { onSnapshot } from 'mobx-state-tree';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishList: any;

  constructor() {
    console.log('Hello WishListComponent');
  }

  ngOnInit() {

    let initialState = {
      items: [
        {
          name: 'Machine Gun Preacher',
          price: 7.35,
          image: 'http://www.richardcrouse.ca//wp-content/uploads/2013/09/machine-gun-preacher-poster.jpeg'
        },
        {
            name: 'LEGO Mindstorms EV3',
            price: 349.95,
            image: 'https://prodimage.images-bn.com/pimages/0673419193054_p0_v1_s550x406.jpg'
        }
      ]
    };

    if (localStorage.getItem('wishlistapp')) {
      const json = JSON.parse(localStorage.getItem('wishlistapp'));
      if (WishList.is(json)) {
        initialState = json;
      }
    }

    this.wishList = WishList.create(initialState);

    onSnapshot(this.wishList, snapshot => {
      console.log('onSnapshot', snapshot);
      localStorage.setItem('wishlistapp', JSON.stringify(snapshot));
    });

    /*
    console.log(this.wishList.items.length);
    this.wishList.items.map(item => console.log(item));
    */

    /*
    setInterval(() => {
      this.wishList.items[0].changePrice(this.wishList.items[0].price + 1);
    }, 1000);
    */
  }

}
