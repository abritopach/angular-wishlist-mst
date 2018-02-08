import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MobxAngularModule } from 'mobx-angular';

// Gesture support for some angular material components.
import 'hammerjs';

// Angular material components module.
import { MyCustomMaterialModule } from './material.module';

import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WishListItemComponent } from '../components/wish-list-item/wish-list-item.component';
import { WishListComponent } from '../components/wish-list/wish-list.component';
import { WishListItemEditComponent } from '../components/wish-list-item-edit/wish-list-item-edit.component';
import { WishListItemAddComponent } from '../components/wish-list-item-add/wish-list-item-add.component';
import { HeaderComponent } from '../components/common/header/header.component';
import { FooterComponent } from '../components/common/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WishListItemComponent,
    WishListComponent,
    WishListItemEditComponent,
    WishListItemAddComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    FormsModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
