import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number

  constructor(private productService: ProductServiceService,
    ) { }

  ngOnInit(): void {
  }

}
