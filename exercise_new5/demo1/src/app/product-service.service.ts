import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './model/student';
import {environment} from '../environments/environment';
import {Class} from './model/class';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getList(nameSearch: string, classSearch: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>(
      environment.url_list_student + '?name_like=' + nameSearch + '&class.name_like=' + classSearch);
  }

  getListPage(numberRecord: number, currentPage: number, nameSearch: string, classSearch: string): Observable<Student[]> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Student[]>(environment.url_list_student + '?_page=' + currentPage + '&_limit=' + numberRecord + '&name_like=' + nameSearch + '&class.name_like=' + classSearch);
  }
 findAllStudent(): Observable<Student[]>{
   return this.httpClient.get<Student[]>(environment.url_list_student);
 }
  findAllClass(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(environment.url_list_class);
  }

  saveStudent(student): Observable<Student> {
    return this.httpClient.post<Student>(environment.url_list_student, student);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(environment.url_find_by_id + id);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(environment.url_edit_student + student.id, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(environment.url_list_student + '/' + id);
  }

}
