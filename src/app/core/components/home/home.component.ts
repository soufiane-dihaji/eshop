import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/product.model';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories$: any;
  products$: any;
  subscription?: Subscription;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.products$ = this.productService.getAll();
    this.categories$ = this.categoryService.getAll();
  }

  ngOnInit(): void {}
}
