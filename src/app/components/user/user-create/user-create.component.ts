import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(9)]]
    });
  }

  ngOnInit(): void {}

  createUser(): void {
    if (this.userForm.valid) {
      this.userService.create(this.userForm.value).subscribe(
        () => {
          this.snackBar.open('Usuário criado com sucesso!', 'Fechar', {
            duration: 3000,
          });
          this.router.navigate(['/users']);
        },
        error => {
          this.snackBar.open('Erro ao criar usuário: ' + error.message, 'Fechar', {
            duration: 3000,
          });
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
