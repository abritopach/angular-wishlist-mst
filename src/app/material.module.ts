import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
         MatToolbarModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
            MatToolbarModule, MatSelectModule],
  exports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
            MatToolbarModule, MatSelectModule]
})
export class MyCustomMaterialModule {}
