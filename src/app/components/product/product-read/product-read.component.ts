import { Component, Input, OnInit } from '@angular/core';
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

  displayedColumns = ['id','name','price', 'action']
  result: string = '';
  products: Product[] = [];
  @Input() filter: string = '';
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getList();
    this.applyFilter();
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
      this.applyFilter();
           console.log(products)
        })
  }

  applyFilter(): void {
    if (!this.filter) {
      this.filteredProducts = this.products; // No filter, show all products
    } else {
      this.filteredProducts = this.products.filter(product => 
        product.name.toLowerCase().includes(this.filter.toLowerCase()) || 
        product.id.toString().includes(this.filter)
      );
    }
  }
}
