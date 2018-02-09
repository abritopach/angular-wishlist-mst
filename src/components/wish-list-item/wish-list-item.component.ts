import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit, OnChanges {

  wishListItem: any;
  isEditing: Boolean = false;
  cloneItem: any;
  flagReadOnly: Boolean = false;

  @Input('item') set item(item: any) {
    // console.log('WishListItemComponent item', item);
    this.wishListItem = item;
    this.cloneItem = clone(item);
  }

  @Input('readonly') set readonly(readonly: boolean) {
    // console.log(readonly);
    this.flagReadOnly = readonly;
  }

  constructor() {
    console.log('Hello WishListItemComponent');
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes['item']);
  }

  onToggleEdit() {
    // console.log('onToggleEdit');
    this.isEditing = true;
  }

  onCancelEdit() {
    // console.log('onCancelEdit');
    this.isEditing = false;
  }

  onSaveEdit() {
    // console.log('onSaveEdit');
    applySnapshot(this.wishListItem, getSnapshot(this.cloneItem));
    this.isEditing = false;
    // this.cloneItem = null;
  }

}
