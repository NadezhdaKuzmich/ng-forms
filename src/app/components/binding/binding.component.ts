import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  car = {
    carName: 'Mazda',
    year: 2007,
  };
  isAuthorized = false;
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      name: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      }),
      agree: new FormControl(false, Validators.requiredTrue),
      contacts: new FormArray([
        new FormControl('+38(0', [
          Validators.pattern(/\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/),
          Validators.required,
        ]),
      ]),
    });
  }

  onSubmit() {
    this.isAuthorized = true;
    this.loginForm.reset();
    this.createNewControl();
  }

  createNewControl() {
    this.loginForm.addControl('subscribe', new FormControl(false));
    // this.loginForm.get('subscribe')?.setValidators(Validators.required);
  }

  get getContacts(): FormArray {
    return this.loginForm.get('contacts') as FormArray;
  }

  addPhone() {
    this.getContacts.push(
      new FormControl('+38(0', [
        Validators.pattern(/\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/),
        Validators.required,
      ])
    );
  }

  clearPhones() {
    this.getContacts.controls.splice(1);
    this.getContacts.removeAt(1);
  }
}
