import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3333/api'; // Certifique-se de que a URL esteja correta

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}
