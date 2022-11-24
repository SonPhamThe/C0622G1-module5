import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';


// @ts-ignore
export const reConfirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // tslint:disable-next-line:triple-equals
  if (password && confirmPassword  && password.value != confirmPassword.value) {
    return {reConfirmPassword: true};
  } else {
    return null;
  }
};

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})

export class AssignmentComponent implements OnInit {

  rfStudent: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfStudent = this._formBuilder.group({
      name: ['Nguyen Thanh Hai',
        [Validators.required,
          Validators.minLength(5)
        ]],
      point: [10,
        [Validators.required,
          Validators.min(0)
        ]],
      address: ['Duy Trung, Duy Xuyen, Quang Nam',
        [Validators.required,
          Validators.minLength(5)
        ]],
      password: ['',
        [Validators.required
        ]],
      confirmPassword: ['']

    }, {validators: reConfirmPassword});
  }

  onSubmit() {
    if (this.rfStudent.valid) {
      console.log(this.rfStudent.value);
    }
  }
}
