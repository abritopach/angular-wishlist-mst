import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
         MatToolbarModule, MatSelectModule, MatDividerModule, MatGridListModule } from '@angular/material';
import { NgcFloatButtonModule } from 'ngc-float-button';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
            MatToolbarModule, MatSelectModule, MatDividerModule, MatGridListModule, NgcFloatButtonModule],
  exports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
            MatToolbarModule, MatSelectModule, MatDividerModule, MatGridListModule, NgcFloatButtonModule]
})
export class MyCustomMaterialModule {}
