import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {ServiceService} from '../../service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  product: Product;
  categoryList: Category[] | undefined;
  message: string;

  equals(o1: Category, o2: Category) {
    return o1.id === o2.id;
  }

  constructor(private productService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAllCategory().subscribe(data => {
      this.categoryList = data;
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productService.findById(this.id).subscribe(data => {
        this.product = data[0];
        this.productForm = this.formBuilder.group({
          id: [this.product.id],
          name: [this.product.name],
          price: [this.product.price],
          description: [this.product.description],
          category: [this.product.category]
        });
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(data => {
        this.productForm = this.formBuilder.group({
          id: [data.id],
          name: [data.name],
          price: [data.price],
          description: [data.description],
          category: [data.category]
        });
        this.message = 'Edit success';
      },
      error => {
        this.message = 'Edit lose';
      });
  }

}
