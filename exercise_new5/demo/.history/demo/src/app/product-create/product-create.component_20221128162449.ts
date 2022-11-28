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

  rfForm = this.form.group({
    name: ['', [Validators.required,
      Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern('\\w+@\\w+.\\w+')]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    country: ['Viet Nam', [Validators.required]],
    age: ['', [Validators.min(18), Validators.max(100)]],
    gender: [0],
    phone: ['', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]],
  });

  constructor(
    private productService: ProductServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.productForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.minLength(5)]],
    //   price: ['', [Validators.required, Validators.min(0)]],
    //   description: ['', [Validators.required]],
    // });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
    // if(this.productForm.valid) {
    //   console.log(this.productForm.value);
    //   this.productService.saveProduct(this.productForm.value);
    //   this.router.navigateByUrl("/product/list")
    // }
  }
}
