import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ɵɵpureFunction0 } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import  localePt  from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { MaskDirective } from './directives/mask.directive';
import { ProductCreateModule } from "./components/product/product-create/product-create.module";
import { ProductCrudModule } from "./views/product-crud/product-crud.module";
import { ProductDeleteModule } from "./components/product/product-delete/product-delete.module";
import { ProductUpdateModule } from "./components/product/product-update/product-update.module";
import { FornecedorCrudModule } from './views/fornecedor-crud/fornecedor-crud.module';
import { FornecedorCreateModule } from './components/fornecedor/fornecedor-create/fornecedor-create.module';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RedDirective,
    ForDirective,
    ProductRead2Component,
    MaskDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    ProductCreateModule,
    ProductCrudModule,
    ProductDeleteModule,
    ProductUpdateModule,
    FornecedorCrudModule,
    FornecedorCreateModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
