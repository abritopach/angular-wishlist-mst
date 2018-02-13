import { Component, OnInit, Input } from '@angular/core';

import { WishListItem } from '../../models/wishlist.model';

import { MatDialogRef } from '@angular/material';

import { WishListItemAddDialogComponent } from '../wish-list-item-add-dialog/wish-list-item-add-dialog.component';

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

  constructor(private dialogRef: MatDialogRef<WishListItemAddDialogComponent>) {
   }

  ngOnInit() {
    this.entry = WishListItem.create({
      name: '',
      price: 0
    });
  }

  onAdd() {
    console.log('onAdd', this.wishList);
    this.wishList.add(this.entry);
    this.entry = WishListItem.create({
      name: '',
      price: 0
    });
    this.dialogRef.close('Dialog closed');
  }

}
