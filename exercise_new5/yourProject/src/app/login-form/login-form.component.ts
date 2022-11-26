import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  getLoginInfo(): void {
    console.log('Thông tin đăng kí: ');
    console.log(this.loginFormGroup.value);
    
  }
}
