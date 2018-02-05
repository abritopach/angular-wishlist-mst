import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list-item-edit',
  templateUrl: './wish-list-item-edit.component.html',
  styleUrls: ['./wish-list-item-edit.component.css']
})
export class WishListItemEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChangeName(event) {
    console.log(event.target.value);
  }

}
