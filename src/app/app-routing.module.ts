import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './components/service/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent, // Tela de login como rota padrão
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard] // Protegendo a rota com AuthGuard
  },
  {
    path: "products",
    loadChildren: () => import('./views/product-crud/product-crud.module').then(m => m.ProductCrudModule),
    canActivate: [AuthGuard]
  },
  {
    path: "products/create",
    loadChildren: () => import('./components/product/product-create/product-create.module').then(m => m.ProductCreateModule),
    canActivate: [AuthGuard]
  },
  {
    path: "products/update/:id",
    loadChildren: () => import('./components/product/product-update/product-update.module').then(m => m.ProductUpdateModule),
    canActivate: [AuthGuard]
  },
  {
    path: "products/delete/:id",
    loadChildren: () => import('./components/product/product-delete/product-delete.module').then(m => m.ProductDeleteModule),
    canActivate: [AuthGuard]
  },
  {
    path: "fornecedor",
    loadChildren: () => import('./views/fornecedor-crud/fornecedor-crud.module').then(m => m.FornecedorCrudModule),
    canActivate: [AuthGuard]
  },
  {
    path: "fornecedor/create",
    loadChildren: () => import('./components/fornecedor/fornecedor-create/fornecedor-create.module').then(m => m.FornecedorCreateModule),
    canActivate: [AuthGuard]
  },
  {
    path: "fornecedor/update/:id",
    loadChildren: () => import('./components/fornecedor/fornecedor-update/fornecedor-update.module').then(m => m.FornecedorUpdateModule),
    canActivate: [AuthGuard]
  },
  {
    path: "users",
    loadChildren: () => import('./views/user-crud/user-crud.module').then(m => m.UserCrudModule),
    canActivate: [AuthGuard]
  },
  {
    path: "users/create",
    loadChildren: () => import('./components/user/user-create/user-create.module').then(m => m.UserCreateModule),
    canActivate: [AuthGuard]
  },
  {
    path: "users/update/:id",
    loadChildren: () => import('./components/user/user-update/user-update.module').then(m => m.UserUpdateModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
