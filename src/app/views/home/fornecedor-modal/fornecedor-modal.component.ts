import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fornecedor-modal',
  templateUrl: './fornecedor-modal.component.html',
  styleUrls: ['./fornecedor-modal.component.css']
})
export class FornecedorModalComponent {

  constructor(public dialogRef: MatDialogRef<FornecedorModalComponent>) {}

  closeModal() {
    this.dialogRef.close();
  }
}
