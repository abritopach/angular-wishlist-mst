import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-wish-list-item-add-dialog',
  templateUrl: './wish-list-item-add-dialog.component.html',
  styleUrls: ['./wish-list-item-add-dialog.component.css']
})
export class WishListItemAddDialogComponent implements OnInit {

  selectedUser: any;

  constructor(private dialogRef: MatDialogRef<WishListItemAddDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedUser = data.selectedUser;
  }

  ngOnInit() {
  }

  /*
  onClickAccept(form) {
    console.log(form);
    this.dialogRef.close('value');
  }
  */

}
