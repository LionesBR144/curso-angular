import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  userForm: FormGroup;
  userId: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.getUser();
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.maxLength(9)]]
    });
  }

  private getUser(): void {
    this.userService.readById(this.userId).subscribe(user => {
      this.userForm.patchValue(user);
    });
  }

  updateUser(): void {
    if (this.userForm.valid) {
      this.userService.update(this.userId, this.userForm.value).subscribe({
        next: () => {
          this.snackBar.open('Usuário atualizado', 'Close', {
            duration: 2000,
          });
          this.router.navigate(['/users']);
        },
        error: (err) => {
          this.snackBar.open('Erro em atualizar', 'Close', {
            duration: 2000,
          });
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
