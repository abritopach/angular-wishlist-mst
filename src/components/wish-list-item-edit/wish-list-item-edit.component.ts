import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-wish-list-item-edit',
  templateUrl: './wish-list-item-edit.component.html',
  styleUrls: ['./wish-list-item-edit.component.css']
})
export class WishListItemEditComponent implements OnInit {

  wishListItem: any;

  @Input('item') set item(item: any) {
    // console.log(item);
    this.wishListItem = item;
  }

  constructor() { }

  ngOnInit() {
  }

  onChangeName(event) {
    // console.log(event.target.value);
    this.wishListItem.changeName(event.target.value);
  }

  onChangePrice(event) {
    // console.log(event.target.value);
    const price = parseFloat(event.target.value);
    if (!isNaN(price)) {
      this.wishListItem.changePrice(price);
    }
  }

  onChangeImage(event) {
    // console.log(event.target.value);
    this.wishListItem.changeImage(event.target.value);
  }

}
