import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule,
         MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule],
  exports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule]
})
export class MyCustomMaterialModule {}
