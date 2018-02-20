import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListItemEditComponent } from './wish-list-item-edit.component';

import { FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

describe('WishListItemEditComponent', () => {
  let component: WishListItemEditComponent;
  let fixture: ComponentFixture<WishListItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule ],
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
