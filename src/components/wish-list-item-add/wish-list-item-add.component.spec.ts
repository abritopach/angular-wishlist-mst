import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WishListItemAddComponent } from './wish-list-item-add.component';

import { MatCardModule, MatIconModule, MatDialogRef } from '@angular/material';

describe('WishListItemAddComponent', () => {
  let component: WishListItemAddComponent;
  let fixture: ComponentFixture<WishListItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatIconModule ],
      declarations: [ WishListItemAddComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: MatDialogRef, useValue: { }}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
