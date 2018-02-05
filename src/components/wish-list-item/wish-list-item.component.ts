import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit, OnChanges {

  wishListItem: any;

  @Input('item') set item(item: any) {
    console.log(item);
    this.wishListItem = item;
  }

  constructor() {
    console.log('Hello WishListItemComponent');
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['item']);
  }

}
