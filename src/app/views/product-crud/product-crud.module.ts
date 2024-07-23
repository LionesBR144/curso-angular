import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCrudComponent } from './product-crud.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: "",
    component: ProductCrudComponent
  }
];

@NgModule({
  declarations: [ProductCrudComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductCrudModule { }
