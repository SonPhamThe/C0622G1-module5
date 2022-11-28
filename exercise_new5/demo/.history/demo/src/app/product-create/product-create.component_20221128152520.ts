import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    
  }

}
