import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$: any;
  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getAll();
   }

  ngOnInit(): void {
  }

}
