import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl = 'http://localhost:3333/api/users';
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map(users => users.map(user => {
        delete user.password;
        return user;
      }))
    );
  }

  readById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  update(id: number, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getUserFornecedores(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/fornecedores`);
  }

}
