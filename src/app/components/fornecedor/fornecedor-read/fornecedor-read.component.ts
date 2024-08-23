import { Component, Input, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { MatTableDataSource } from '@angular/material/table';
import { FornecedorService } from '../fornecedor.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

  fornecedores: Fornecedor[] = [];
  displayedColumns: string[] = ['id', 'email', 'password', 'action'];
  dataSource = new MatTableDataSource<Fornecedor>();
  @Input() filter: string = '';
  filteredFornecedores: Fornecedor[] = [];

  constructor(
    private fornecedorService: FornecedorService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  ngOnChanges(): void {
    this.applyFilter();
  }

  confirmDialog(id: number): void {
    const message = `Deseja realmente excluir?`;

    const dialogData = new ConfirmDialogModel("Confirmar Exclusão", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "350px",
      height:"250px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.deleteFornecedor(id);
      }
    });
  }

  deleteFornecedor(id: number): void {
    this.fornecedorService.delete(id).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor Excluído');
      this.getList();
    });
  }

  getList(): void {
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedores = fornecedores;
      this.applyFilter(); // Apply filter whenever the list is loaded
    });
  }

  applyFilter(): void {
    const maxFornecedores = 10; // Defina o número máximo de fornecedores a ser exibido
  
    if (!this.filter) {
      this.filteredFornecedores = this.fornecedores.slice(0, maxFornecedores);
    } else {
      this.filteredFornecedores = this.fornecedores.filter(fornecedor =>
        fornecedor.email.toLowerCase().includes(this.filter.toLowerCase()) ||
        fornecedor.id.toString().includes(this.filter)
      ).slice(0, maxFornecedores);
    }
    this.dataSource.data = this.filteredFornecedores;
  }
}

