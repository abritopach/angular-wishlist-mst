import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WishListItemComponent } from './wish-list-item.component';

import { MatCardModule, MatIconModule } from '@angular/material';

describe('WishListItemComponent', () => {
  let component: WishListItemComponent;
  let fixture: ComponentFixture<WishListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatIconModule ],
      declarations: [ WishListItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create WishListItemComponent', () => {
    expect(component).toBeTruthy();
  });
});
