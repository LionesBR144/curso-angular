import { Component } from '@angular/core';
import { FornecedorModalComponent } from './fornecedor-modal/fornecedor-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) {}

  // Método openModal
  openModal(): void {
    this.dialog.open(FornecedorModalComponent);
  }
}
