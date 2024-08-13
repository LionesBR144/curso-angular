import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  searchQuery: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

  onSearchChange(searchValue: string): void {
    this.searchQuery = searchValue;
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.onSearchChange('');
  }
}
