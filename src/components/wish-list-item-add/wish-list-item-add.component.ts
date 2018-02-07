import { Component, OnInit, Input } from '@angular/core';

import { WishListItem } from '../../models/wishlist.model';

@Component({
  selector: 'app-wish-list-item-add',
  templateUrl: './wish-list-item-add.component.html',
  styleUrls: ['./wish-list-item-add.component.css']
})
export class WishListItemAddComponent implements OnInit {

  entry: any;
  wishList: any;
  @Input('list') set list(wishList: any) {
    this.wishList = wishList;
    // console.log(this.wishList);
  }

  constructor() { }

  ngOnInit() {
    this.entry = WishListItem.create({
      name: '',
      price: 0
    });
  }

  onAdd() {
    console.log('onAdd');
    this.wishList.add(this.entry);
    this.entry = WishListItem.create({
      name: '',
      price: 0
    });
  }

}
