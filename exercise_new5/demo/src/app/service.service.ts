import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from './model/product';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Category} from './model/category';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {
  }

  getList(nameSearch: string, categorySearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      environment.api_url + '?name_like=' + nameSearch + '&category.name_like=' + categorySearch);
  }

  getListPage(numberRecord: number, currentPage: number, nameSearch: string, categorySearch: string): Observable<Product[]> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Product[]>(environment.api_url + '?_page=' + currentPage + '&_limit=' + numberRecord + '&name_like=' + nameSearch + '&category.name_like=' + categorySearch);
  }

  findAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(environment.api_url_cate);
  }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(environment.api_url, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(environment.url_findById + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    console.log(product);
    return this.httpClient.put<Product>(environment.url_edit + product.id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(environment.api_url + '/' + id);
  }

}
