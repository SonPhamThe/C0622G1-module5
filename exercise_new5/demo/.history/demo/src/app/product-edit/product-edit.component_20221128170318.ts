import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(
    private productService: ProductServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      })
    })
  }

  ngOnInit(): void {}

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    
  }
}
