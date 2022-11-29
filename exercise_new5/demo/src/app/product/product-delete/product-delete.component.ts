import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ServiceService} from '../../service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  product: Product;
  message: string;

  constructor(private productService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
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

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.router.navigate(['/product/list']);
    });
  }

}
