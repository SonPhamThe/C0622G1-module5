import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Student} from '../../model/student';
import {Class} from '../../model/class';
import {ProductServiceService} from '../../product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
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
              private router: Router) {
  }

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
          class: [this.student.class]
        });
      });
    });
  }

  updateStudent(id: number) {
    const student = this.studentForm.value;
    this.studentService.updateStudent(id, student).subscribe(data => {
        this.studentForm = this.formBuilder.group({
          id: [data.id],
          name: [data.name],
          dayOfBirth: [data.dayOfBirth],
          score: [data.score],
          class: [data.class]
        });
        this.message = 'Edit success';
      },
      error => {
        this.message = 'Edit lose';
      });
  }

}
