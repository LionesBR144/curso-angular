import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorCreateComponent } from './fornecedor-create.component';

const routes: Routes = [
  {
    path: "",
    component: FornecedorCreateComponent
  }
];

@NgModule({
  declarations: [FornecedorCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FornecedorCreateModule { }
