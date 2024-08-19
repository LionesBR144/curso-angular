import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/service/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    // canActivate: [AuthGuard]  // Protege a rota Home com o AuthGuard
  },
  // {
  //   path: "login",
  //   component: LoginComponent
  // },
  {
    path: "products",
    loadChildren: () => import('./views/product-crud/product-crud.module').then(m => m.ProductCrudModule)
  },
  {
    path: "products/create",
    loadChildren: () => import('./components/product/product-create/product-create.module').then(m => m.ProductCreateModule)
  },
  {
    path: "products/update/:id",
    loadChildren: () => import('./components/product/product-update/product-update.module').then(m => m.ProductUpdateModule)
  },
  {
    path: "products/delete/:id",
    loadChildren: () => import('./components/product/product-delete/product-delete.module').then(m => m.ProductDeleteModule)
  },
  {
    path: "fornecedor",
    loadChildren: () => import('./views/fornecedor-crud/fornecedor-crud.module').then(m => m.FornecedorCrudModule)
  },
  {
    path: "fornecedor/create",
    loadChildren: () => import('./components/fornecedor/fornecedor-create/fornecedor-create.module').then(m => m.FornecedorCreateModule)
  },
  {
    path: "fornecedor/update/:id",
    loadChildren: () => import('./components/fornecedor/fornecedor-update/fornecedor-update.module').then(m => m.FornecedorUpdateModule)
  },
  {
    path: "users",
    loadChildren: () => import('./views/user-crud/user-crud.module').then(m => m.UserCrudModule)
  },
  {
    path: "users/create",
    loadChildren: () => import('./components/user/user-create/user-create.module').then(m => m.UserCreateModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
