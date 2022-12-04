import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Class} from '../../model/class';
import {ProductServiceService} from '../../product-service.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup;
  message: string;
  classList: Class[] | undefined;

  constructor(private studentService: ProductServiceService,
              private formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.studentService.findAllClass().subscribe(data => {
      this.classList = data;
      this.studentForm = this.formBuilder.group({
        id: [],
        name: ['', [Validators.required, Validators.minLength(5)]],
        dayOfBirth: ['', [Validators.required]],
        score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
        class: ['', [Validators.required]],
      });
    });
  }

  submit() {
    const student = this.studentForm.value;
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
    }
    this.studentService.saveStudent(student).subscribe(data => {
        this.studentForm = this.formBuilder.group({
          id: [data.id],
          name: [data.name],
          dayOfBirth: [data.dayOfBirth],
          score: [data.score],
          class: [data.class]
        });
        this.toastr.success('Create Success');
      },
      error => {
        this.message = 'Success lose';
      });
  }

}
