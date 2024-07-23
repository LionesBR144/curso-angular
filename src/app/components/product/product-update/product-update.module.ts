import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductUpdateComponent } from './product-update.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: "",
    component: ProductUpdateComponent
  }
];


@NgModule({
  declarations: [ProductUpdateComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductUpdateModule { }
