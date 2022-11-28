import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  // productForm: FormGroup = new FormGroup({
  //   id: new FormControl(),
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   description: new FormControl(),
  // });

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]],
  });

  constructor(
    private productService: ProductServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  submit() {
    // const product = this.productForm.value;
    // this.productService.saveProduct(product);
    // this.productForm.reset();
    if(this.productForm.valid) {
      console.log(this.productForm.value);
      this.productService.saveProduct(this.productForm.value);
      this.router.navigateByUrl("/product/list")
    }
  }
}
