import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListItemAddComponent } from './wish-list-item-add.component';

describe('WishListItemAddComponent', () => {
  let component: WishListItemAddComponent;
  let fixture: ComponentFixture<WishListItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListItemAddComponent ]
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
