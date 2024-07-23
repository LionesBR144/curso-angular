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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
