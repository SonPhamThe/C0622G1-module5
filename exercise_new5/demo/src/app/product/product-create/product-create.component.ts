import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  message: string;
  categoryList: Category[] | undefined;

  constructor(private productService: ServiceService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(data => {
      this.categoryList = data;
      this.productForm = this.formBuilder.group({
        id: [],
        name: [],
        price: [],
        description: [],
        category: [],
      });
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(data => {
        this.productForm = this.formBuilder.group({
          id: [data.id],
          name: [data.name],
          price: [data.price],
          description: [data.description],
          category: [data.category]
        });
        this.message = 'Create success';
      },
      error => {
        this.message = 'Success lose';
      });
  }
}
