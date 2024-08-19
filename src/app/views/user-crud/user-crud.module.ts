import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCrudComponent } from './user-crud.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: "",
    component: UserCrudComponent
  }
];

@NgModule({
  declarations: [
    UserCrudComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserCrudModule { }
