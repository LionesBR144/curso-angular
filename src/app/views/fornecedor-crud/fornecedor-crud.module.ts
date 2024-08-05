import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorCrudComponent } from './fornecedor-crud.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: "",
    component: FornecedorCrudComponent
  }
];
@NgModule({
  declarations: [FornecedorCrudComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class FornecedorCrudModule { }
