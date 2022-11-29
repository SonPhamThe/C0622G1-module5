import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/model/product';
import {ServiceService} from '../../service.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  nameSearch: string;
  numberRecord: number;

  currentPage: number;

  totalPage: number;

  categorySearch: string;

  categoryList: Category[] | undefined;

  constructor(private productService: ServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.nameSearch = '';
    this.categorySearch = '';
    this.numberRecord = 3;
    this.currentPage = 1;
    this.getListOne();
    this.productService.findAllCategory().subscribe(data => {
      this.categoryList = data;
    });
  }

  private getListOne() {
    this.productService.getList(this.nameSearch, this.categorySearch).subscribe(
      data => {
        this.totalPage = Math.ceil(data.length / this.numberRecord);
        this.productService.getListPage(this.numberRecord, this.currentPage, this.nameSearch, this.categorySearch).subscribe(pagingList => {
          this.products = pagingList;
        });
      }
    );
  }

  previous(): void {
    this.currentPage--;
    this.productService.getListPage(this.numberRecord, this.currentPage, this.nameSearch, this.categorySearch).subscribe(pagingList => {
      this.products = pagingList;
    });
  }

  next(): void {
    this.currentPage++;
    this.productService.getListPage(this.numberRecord, this.currentPage, this.nameSearch, this.categorySearch).subscribe(pagingList => {
      this.products = pagingList;
    });
  }

  search(value: string, value1: string) {
    this.nameSearch = value;
    this.categorySearch = value1;
    this.currentPage = 1;
    this.productService.getList(this.nameSearch, this.categorySearch).subscribe(data => {
      this.totalPage = Math.ceil(data.length / this.numberRecord);
      this.productService.getListPage(this.numberRecord, this.currentPage, this.nameSearch, this.categorySearch).subscribe(pagingList => {
        this.products = pagingList;
      });
    });
  }
}
