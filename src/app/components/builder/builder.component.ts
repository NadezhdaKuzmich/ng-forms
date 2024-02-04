import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from './custom.validator';
import { UserNameValidator } from './async.validator';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss',
})
export class BuilderComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.formBuilder.group({
      login: [
        '',
        [Validators.required],
        [UserNameValidator.createValidator(this.userService)],
      ],
      email: [null, [Validators.required, Validators.email]],
      age: [null, [Validators.required, AgeValidator]],
    });
  }

  ngOnInit(): void {
    // this.form.valueChanges.subscribe((val) => {
    //   console.log(val);
    // });

    this.form.get('login')?.valueChanges.subscribe((loginValue) => {
      this.form.get('email')?.setValue(`${loginValue}@example.com`);
    });
  }

  handleSubmit() {
    this.form.reset();
  }

  setNewLogin() {
    // ERROR Error: NG01002: Must supply a value for form control with name: 'email'
    // this.form.setValue({login: 'Alex'})
    // this.form.setValue({ login: 'Alex', email: 'user-alex@gamil.com' });
    this.form.patchValue({ login: 'Alex' });
    // this.form.patchValue({ login: 'Alex' }, { emitEvent: false });
  }
}
