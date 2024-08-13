import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class FornecedorCrudComponent implements OnInit {

  searchQuery: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(['/fornecedor/create']);
  }

  onSearchChange(searchValue: string): void {
    this.searchQuery = searchValue;
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.onSearchChange('');
  }
}
