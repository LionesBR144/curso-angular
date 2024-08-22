import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ConfirmDialog3Component, ConfirmDialog3Model } from '../../confirm-dialog3/confirm-dialog3.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fullName', 'email','password', 'action'];
  dataSource = new MatTableDataSource<User>();
  users: User[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getList();
  }

  confirmDialog3(id: number): void {
    const message = `Deseja realmente excluir?`;

    const dialogData = new ConfirmDialog3Model("Confirmar Exclusão", message);

    const dialogRef = this.dialog.open(ConfirmDialog3Component, {
      width: "350px",
      height:"250px",
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
}
