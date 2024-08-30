import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fornecedor } from '../fornecedor.model';
import { Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedorForm: FormGroup;
  hide = true;

  constructor(
    private router: Router,
    private fornecedorService: FornecedorService
  ) {
    this.fornecedorForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(9)])
    });
  }

  ngOnInit(): void {}

  get emailFormControl() {
    return this.fornecedorForm.get('email') as FormControl;
  }

  get passwordFormControl() {
    return this.fornecedorForm.get('password') as FormControl;
  }

  createFornecedor(): void {
    if (this.fornecedorForm.invalid) {
      this.fornecedorService.showMessage('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const fornecedor: Fornecedor = this.fornecedorForm.value;

    this.fornecedorService.create(fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor cadastrado com sucesso!');
      this.router.navigate(['/fornecedores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedor']);
  }
}
