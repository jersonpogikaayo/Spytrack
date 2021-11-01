import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  emailValidation: boolean = true;
  registrationForm: FormGroup;
  passwordVal = {
    minLen: false,
    number: false,
    symbol: false,
    upperCase: false,
    lowerCase: false
  }
  cPasswordVal = false;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.registrationForm = this._formBuilder.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}')]),
      cpassword: new FormControl('', Validators.required),
    });
  }

  passwordInputValidation(e: Event) {
    console.log(e);
    const number = /\d/;
    const symbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const upperCase = /[A-Z]/ 
    const lowerCase = /[a-z]/ 
    this.registrationForm.controls.password.setValue(e);
    if(this.registrationForm.controls.password.value == '') {
      this.passwordVal = {
        minLen: false,
        number: false,
        symbol: false,
        upperCase: false,
        lowerCase: false
      }
    } else {
      if(this.registrationForm.controls.password.value.length >= 8) {
        this.passwordVal.minLen = true;
      } else {
        this.passwordVal.minLen = false;
      }

      if(number.test(this.registrationForm.controls.password.value)) {
        this.passwordVal.number = true;
      } else {
        this.passwordVal.number = false;
      }
      if(symbol.test(this.registrationForm.controls.password.value)) {
        this.passwordVal.symbol = true;
      } else {
        this.passwordVal.symbol = false;
      }
      if(upperCase.test(this.registrationForm.controls.password.value)) {
        this.passwordVal.upperCase = true;
      } else {
        this.passwordVal.upperCase = false;
      }
      if(lowerCase.test(this.registrationForm.controls.password.value)) {
        this.passwordVal.lowerCase = true;
      } else {
        this.passwordVal.lowerCase = false;
      }
    }
  }

  cpasswordInputValidation(e) {
    this.registrationForm.controls.cpassword.setValue(e);
    if(this.registrationForm.controls.password.value == this.registrationForm.controls.cpassword.value) {
      this.cPasswordVal = true;
    } else {
      this.cPasswordVal = false;
    }
  }

  login() {
    this.router.navigate(['/live-tracking']);
  }

}
