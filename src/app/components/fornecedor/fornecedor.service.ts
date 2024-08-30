import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fornecedor } from './fornecedor.model';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  
  baseUrl = "http://localhost:3333/api/fornecedores";
  maxFornecedores = 10;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.read().pipe(
      switchMap(fornecedores => {
        if (fornecedores.length >= this.maxFornecedores) {
          this.showMessage('Número máximo de fornecedores alcançado.');
          return throwError(() => new Error('Número máximo de fornecedores alcançado.'));
        }
        return this.http.post<Fornecedor>(this.baseUrl, fornecedor);
      }),
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
  
  read(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${fornecedor.id}`;
    return this.http.put<Fornecedor>(url, fornecedor);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
