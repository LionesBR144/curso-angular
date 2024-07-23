import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDeleteComponent } from './product-delete.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog'

const routes: Routes = [
  {
    path: "",
    component: ProductDeleteComponent
  }
];

@NgModule({
  declarations: [ProductDeleteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductDeleteModule { }
