import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
         MatToolbarModule, MatSelectModule, MatDividerModule, MatGridListModule, MatDialogModule } from '@angular/material';
import { NgcFloatButtonModule } from 'ngc-float-button';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
            MatToolbarModule, MatSelectModule, MatDividerModule, MatGridListModule, NgcFloatButtonModule, MatDialogModule],
  exports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
            MatToolbarModule, MatSelectModule, MatDividerModule, MatGridListModule, NgcFloatButtonModule, MatDialogModule]
})
export class MyCustomMaterialModule {}
