import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
         MatToolbarModule, MatSelectModule, MatDividerModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
            MatToolbarModule, MatSelectModule, MatDividerModule],
  exports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
            MatToolbarModule, MatSelectModule, MatDividerModule]
})
export class MyCustomMaterialModule {}
