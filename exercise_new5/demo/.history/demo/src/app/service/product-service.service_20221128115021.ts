import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  products: Product[] = [
    
  ];

  constructor() {}

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    this.products.splice(id, 1);
    // this.products = this.products.filter(product => {
    //   return product.id !== id;
    // })
  }
}
