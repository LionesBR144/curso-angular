import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCrudComponent } from './product-crud.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductReadComponent } from 'src/app/components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: "",
    component: ProductCrudComponent
  }
];

@NgModule({
  declarations: [
    ProductCrudComponent,
    ProductReadComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductCrudModule { }
