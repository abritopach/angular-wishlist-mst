import { NgModule } from '@angular/core';

// Angular Material Components.
import { MatCardModule, MatFormFieldModule, MatOptionModule  } from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatOptionModule],
  exports: [MatCardModule, MatFormFieldModule, MatOptionModule]
})
export class MyCustomMaterialModule {}
