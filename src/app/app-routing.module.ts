import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
