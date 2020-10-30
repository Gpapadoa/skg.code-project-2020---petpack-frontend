import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrls: ['./registration-step1.component.css']
})
export class RegistrationStep1Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  step1Submitted() {
    this.regForm.get('personalDetails').get('firstname').markAsTouched();
    this.regForm.get('personalDetails').get('firstname').updateValueAndValidity();
    this.regForm.get('personalDetails').get('lastname').markAsTouched();
    this.regForm.get('personalDetails').get('lastname').updateValueAndValidity();
    this.regForm.get('personalDetails').get('username').markAsTouched();
    this.regForm.get('personalDetails').get('username').updateValueAndValidity();
    this.regForm.get('personalDetails').get('email').markAsTouched();
    this.regForm.get('personalDetails').get('email').updateValueAndValidity();
    this.regForm.get('personalDetails').get('password').markAsTouched();
    this.regForm.get('personalDetails').get('password').updateValueAndValidity();
    this.regForm.get('personalDetails').get('conf-password').markAsTouched();
    this.regForm.get('personalDetails').get('conf-password').updateValueAndValidity();
  }

}