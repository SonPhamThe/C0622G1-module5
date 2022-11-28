import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  // DI
  constructor(private productService: ProductServiceService ) { }

  ngOnInit(): void {
    this.products = this.
  }

}
