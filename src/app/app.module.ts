import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WishListItemComponent } from '../components/wish-list-item/wish-list-item.component';
import { WishListComponent } from '../components/wish-list/wish-list.component';


@NgModule({
  declarations: [
    AppComponent,
    WishListItemComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
