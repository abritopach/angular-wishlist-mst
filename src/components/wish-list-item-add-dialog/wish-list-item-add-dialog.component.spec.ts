import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListItemAddDialogComponent } from './wish-list-item-add-dialog.component';

describe('WishListItemAddDialogComponent', () => {
  let component: WishListItemAddDialogComponent;
  let fixture: ComponentFixture<WishListItemAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListItemAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListItemAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
