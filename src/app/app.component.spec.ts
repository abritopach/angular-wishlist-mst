import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { MyCustomMaterialModule } from './material.module';
import { WishListItemComponent } from '../components/wish-list-item/wish-list-item.component';
import { WishListComponent } from '../components/wish-list/wish-list.component';
import { WishListItemEditComponent } from '../components/wish-list-item-edit/wish-list-item-edit.component';
import { WishListItemAddComponent } from '../components/wish-list-item-add/wish-list-item-add.component';
import { HeaderComponent } from '../components/common/header/header.component';
import { FooterComponent } from '../components/common/footer/footer.component';
import { WishListItemAddDialogComponent } from '../components/wish-list-item-add-dialog/wish-list-item-add-dialog.component';

import { FormsModule} from '@angular/forms';

// import { initializeSnapshots } from 'jasmine-angular-snapshot-testing';

// initializeSnapshots({
  /**
   * This flag will cause tests to fail if a new snapshot shoudl be generated.
   * Generally, you want to set this value to true when running tests on CI
   * and false when writing new unit tests
   */
  // failOnSnapshotDiscovery: false,
  /**
   * This is the file extension that will be appended to the end of test
   * files when generating a snapshot file.
   *
   * For example, if this is set to 'snap' and the spec file is called
   * 'table.component.spec.ts' then the generated file will be called
   * 'table.component.spec.ts.snap'
   */
   // fileExtension: 'snap',
   /**
    * This flag will cause new snapshots to overwrite existing snapshots.
    * This is useful during development.
    *
    * Be aware that if this is set to 'true' snapshot tests will never fail.
    */
    // discardOldSnapshots: false,
// });

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MyCustomMaterialModule, FormsModule, ],
      declarations: [
        AppComponent,
        WishListItemComponent,
        WishListComponent,
        WishListItemEditComponent,
        WishListItemAddComponent,
        HeaderComponent,
        FooterComponent,
        WishListItemAddDialogComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
      /*
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  */
});
