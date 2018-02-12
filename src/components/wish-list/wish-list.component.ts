import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { WishList } from '../../models/wishlist.model';
import { Group } from '../../models/group.model';

import { onSnapshot, addMiddleware } from 'mobx-state-tree';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishList: any;
  selectedUser: any;
  group: any;

  constructor(private ref: ChangeDetectorRef) {
    console.log('Hello WishListComponent');
    this.selectedUser = null;
  }

  ngOnInit() {
    console.log('ngOninit WishListComponent');

    const initialState = {
      /*
      items: [
        {
          name: 'Machine Gun Preacher',
          price: 7.35,
          image: 'http://www.richardcrouse.ca//wp-content/uploads/2013/09/machine-gun-preacher-poster.jpeg'
        },
        {
            name: 'LEGO Mindstorms EV3',
            price: 349.95,
            image: 'https://prodimage.images-bn.com/pimages/0673419193054_p0_v1_s550x406.jpg'
        }
      ],
      */
      users: {
        /*
        '5a7aee01c61a7b598b1b03a4': {
          id: '5a7aee01c61a7b598b1b03a4',
          name: 'Jordan Gill',
          gender: 'f'
        },
        '5a7aee01827c937e975615a3': {
          id: '5a7aee01827c937e975615a3',
          name: 'Amalia Watts',
          gender: 'f'
        },
        '5a7aee01cedf442c7dc02f5d': {
          id: '5a7aee01cedf442c7dc02f5d',
          name: 'Carey Hodge',
          gender: 'm'
        },
        '5a7aee0160ef49da6e53a7b1': {
          id: '5a7aee0160ef49da6e53a7b1',
          name: 'Isabelle Gordon',
          gender: 'f'
        },
        '5a7aee0186c018cec2895288': {
          id: '5a7aee0186c018cec2895288',
          name: 'Ortiz Fuentes',
          gender: 'm'
        },
        '5a7aee013bf18b8139edbca2': {
          id: '5a7aee013bf18b8139edbca2',
          name: 'Dixon Black',
          gender: 'm'
        },
        '5a7aee019ad6ac1d6f9267a5': {
          id: '5a7aee019ad6ac1d6f9267a5',
          name: 'Lenora Avery',
          gender: 'f'
        },
        '5a7aee01758a5fc11e781070': {
          id: '5a7aee01758a5fc11e781070',
          name: 'Serrano Burks',
          gender: 'm'
        },
        '5a7aee01306c91448548c5ec': {
          id: '5a7aee01306c91448548c5ec',
          name: 'Alba Foreman',
          gender: 'f'
        }
        */
      }
    };

    /*
    console.log(this.group.users.values());
    this.group.users.values().map(user => console.log( user.name));
    */

    if (localStorage.getItem('wishlistapp')) {
      const json = JSON.parse(localStorage.getItem('wishlistapp'));
      // if (WishList.is(json)) {
      if (Group.is(json)) {
        // console.log(json);
        // initialState.items = json.items;
        initialState.users = json.users;
      }
    } else {
      // Load users from server.
      this.group.load();
    }

    // this.wishList = WishList.create(initialState);
    this.group = window['group'] = Group.create({
      users: initialState.users
    });

    addMiddleware(this.group, (call, next) => {
      console.log(`[${call.type}] ${call.name}`);
      return next(call);
    });

    // onSnapshot(this.wishList, snapshot => {
    onSnapshot(this.group, snapshot => {
      console.log('onSnapshot', snapshot);
      localStorage.setItem('wishlistapp', JSON.stringify(snapshot));
    });

    /*
    console.log(this.wishList.items.length);
    this.wishList.items.map(item => console.log(item));
    */

    /*
    setInterval(() => {
      this.wishList.items[0].changePrice(this.wishList.items[0].price + 1);
    }, 1000);
    */
  }

  onChange(user) {
    // console.log(user);
    this.selectedUser = user;
  }

  onClickGetSuggestions() {
    console.log('onClickGetSuggestions');
    this.selectedUser.getSuggestions();
    setInterval(() => {
      // The following is required, otherwise the view will not be updated.
      this.ref.markForCheck();
    }, 500);
  }

}
