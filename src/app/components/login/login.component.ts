import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = { email: '', password: '' };

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {}

  onSubmit() {
    const loginUrl = 'http://localhost:3333/api/login';
    this.http.post(loginUrl, this.loginData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token); // Armazene o token ou qualquer outra lógica necessária
        this.snackBar.open('Login successful!', 'Close', { duration: 3000 });
        this.router.navigate(['/home']); // Redireciona para a tela Home
      },
      (error) => {
        this.snackBar.open('Login failed!', 'Close', { duration: 3000 });
      }
    );
  }
}
