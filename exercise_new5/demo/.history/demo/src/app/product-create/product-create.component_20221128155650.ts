import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';

pr
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private productService: ProductServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset;
  }
}
