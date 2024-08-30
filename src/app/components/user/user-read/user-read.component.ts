import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fullName', 'email', 'password', 'action'];
  dataSource = new MatTableDataSource<User>();
  fornecedoresDataSource = new MatTableDataSource<any>();
  users: User[] = [];
  selectedUserFornecedores: any;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getList();
  }

  confirmDialog(id: number): void {
    const message = `Deseja realmente excluir?`;

    const dialogData = new ConfirmDialogModel("Confirmar Exclusão", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "350px",
      height: "250px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.deleteUser(id);
      }
    });
  }

  deleteUser(id: number): void {
    this.userService.delete(id).subscribe(() => {
      this.userService.showMessage('Usuário deletado');
      this.getList();
    });
  }

  getList(): void {
    this.userService.read().subscribe(users => {
      this.users = users;
      this.dataSource.data = users;
    });
  }

  viewFornecedores(userId: number): void {
    this.userService.getUserFornecedores(userId).subscribe(data => {
      console.log('Dados recebidos:', data); // Verifique a estrutura dos dados
      this.selectedUserFornecedores = data;
      this.fornecedoresDataSource.data = data.fornecedores;
      console.log('Fornecedores:', this.fornecedoresDataSource.data); // Verifique os dados no dataSource
    }, error => {
      console.error('Erro ao carregar fornecedores:', error);
    });
  }
}