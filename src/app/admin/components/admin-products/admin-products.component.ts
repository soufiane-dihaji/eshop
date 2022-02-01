import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/product.model';
import { ProductService } from 'shared/services/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  displayedColumns: string[] = ['title', 'price', 'key'];
  dataSource?: any;

  products: Product[] = [];

  subscription?: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService
      .getAll()
      .subscribe((products: Product[]) => {
        this.products = products;
        this.initializeTable(products);
      });
  }

  filter(query: string) {
    let filtredProducts = query
      ? this.products.filter((product: Product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;

    this.initializeTable(filtredProducts);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private initializeTable(products: Product[]) {
    this.dataSource = new MatTableDataSource<Product>(products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
