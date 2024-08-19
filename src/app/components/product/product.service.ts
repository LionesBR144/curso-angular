import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Product } from './product-create/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3333/api/products"
  maxProducts = 10

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(product: Product): Observable<Product> {
    return this.read().pipe(
      switchMap(products => {
        if (products.length >= this.maxProducts) {
          this.showMessage('Número máximo de produtos alcançado.');
          return throwError(() => new Error('Número máximo de produtos alcançado.'));
        }
        return this.http.post<Product>(this.baseUrl, product);
      }),
      catchError(error => {
        // Trate o erro conforme necessário
        return throwError(() => error);
      })
    );
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url,product);
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }
}
