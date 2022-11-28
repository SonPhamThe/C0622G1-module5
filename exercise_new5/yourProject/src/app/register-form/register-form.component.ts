import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';

export const reconfirmPassword: ValidatorFn = (control: AbstractControl): Validators | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password && confirmPassword && password.touched && confirmPassword.touched && password.value !== confirmPassword.value) {
    return {reconfirmPassword: true};
  } else {
    return null;
  }
};

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  title = 'AngularForm';

  rfForm = this.formBuilder.group({
    name: ['', [Validators.required,
      Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern('\\w+@\\w+.\\w+')]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    country: ['Viet Nam', [Validators.required]],
    age: ['', [Validators.min(18), Validators.max(100)]],
    gender: [0],
    phone: ['', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]],
  }, {validators: reconfirmPassword});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // .group để tạo các thuộc tính
  }

  onSubmit() {
    if (this.rfForm.valid) {
      console.log(this.rfForm.value);
    }
  }
}
