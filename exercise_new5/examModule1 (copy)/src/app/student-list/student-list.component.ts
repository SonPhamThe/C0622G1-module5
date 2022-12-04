import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';
import {ExamService} from '../exam.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  pageNumber: number;

  constructor(private studentService: ExamService,
              private router: Router) { }

  ngOnInit(): void {
    this.pageNumber = 1;
    this.studentService.getList().subscribe(data => {
      this.students = data;
    });
  }

}
