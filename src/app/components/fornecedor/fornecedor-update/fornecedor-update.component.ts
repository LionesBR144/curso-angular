import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedorForm: FormGroup;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.fornecedorForm = new FormGroup({
      id: new FormControl(null),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(9)])
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.fornecedorService.read().subscribe((fornecedores: Fornecedor[]) => {
      const fornecedor = fornecedores.find(f => f.id === id);
      if (fornecedor) {
        this.fornecedorForm.patchValue(fornecedor);
      }
    });
  }

  updateFornecedor(): void {
    if (this.fornecedorForm.invalid) {
      return;
    }

    this.fornecedorService.update(this.fornecedorForm.value).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/fornecedores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}

