import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3333/api/users';

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
}
