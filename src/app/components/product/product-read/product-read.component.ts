import { Component, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';
import { ProductService } from '../product.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id','name','price', 'action']
  result: string = '';
  product: Product;

  constructor(private productService: ProductService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getList();
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
      console.log("[ConfirmDialog()]", dialogResult)
      if (dialogResult) {
        this.deleteProduct(id);
      }
    });
  }

  deleteProduct(id: number): void {
    this.productService.delete(id).subscribe(() => {
    this.productService.showMessage('Produto Excluido');
    this.router.navigate(['/products']);
      this.getList()
    });
  }     

  getList() {
    this.productService.read().subscribe(products => {
      this.products = products
           console.log(products)
        })
  }
}
