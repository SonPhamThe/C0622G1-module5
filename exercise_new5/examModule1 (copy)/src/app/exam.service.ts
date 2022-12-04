import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './model/student';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(
      environment.url_list );
  }
}
