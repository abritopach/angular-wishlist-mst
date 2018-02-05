import { Component, OnInit } from '@angular/core';

import { WishList } from '../../models/wishlist.model';

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
    this.wishList = WishList.create({
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

    console.log(this.wishList.items.length);
    this.wishList.items.map(item => console.log(item));
  }

}
