import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Student} from '../../model/student';
import {ProductServiceService} from '../../product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Class} from '../../model/class';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  studentForm: FormGroup;
  id: number;
  student: Student;
  classList: Class[] | undefined;
  message: string;

  equals(o1: Class, o2: Class) {
    return o1.id === o2.id;
  }

  constructor(private studentService: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.studentService.findAllClass().subscribe(data => {
      this.classList = data;
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.studentService.findById(this.id).subscribe(data => {
        this.student = data[0];
        this.studentForm = this.formBuilder.group({
          id: [this.student.id],
          name: [this.student.name],
          dayOfBirth: [this.student.dayOfBirth],
          score: [this.student.score],
          class: [this.student.class.name]
        });
      });
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      this.router.navigate(['/student/list']);
    });
  }

}
