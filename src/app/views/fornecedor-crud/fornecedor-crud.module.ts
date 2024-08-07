import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorCrudComponent } from './fornecedor-crud.component';
import { MatButtonModule } from '@angular/material/button';
import { FornecedorReadComponent } from 'src/app/components/fornecedor/fornecedor-read/fornecedor-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialog2Component } from 'src/app/components/confirm-dialog2/confirm-dialog2.component';

const routes: Routes = [
  {
    path: "",
    component: FornecedorCrudComponent
  }
];
@NgModule({
  declarations: [
    FornecedorCrudComponent,
    FornecedorReadComponent,
    ConfirmDialog2Component

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FornecedorCrudModule { }
