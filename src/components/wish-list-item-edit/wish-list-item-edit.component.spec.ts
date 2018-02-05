import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListItemEditComponent } from './wish-list-item-edit.component';

describe('WishListItemEditComponent', () => {
  let component: WishListItemEditComponent;
  let fixture: ComponentFixture<WishListItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
