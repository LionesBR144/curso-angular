import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorCrudComponent } from './fornecedor-crud.component';
import { MatButtonModule } from '@angular/material/button';
import { FornecedorReadComponent } from 'src/app/components/fornecedor/fornecedor-read/fornecedor-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from 'src/app/shared/shared.module';

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

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FornecedorCrudModule { }
