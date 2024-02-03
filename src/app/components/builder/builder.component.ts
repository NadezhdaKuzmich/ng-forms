import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss',
})
export class BuilderComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      login: '',
      email: [null, [Validators.required, Validators.email]],
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
    // this.form.patchValue({ login: 'Alex' });
    this.form.patchValue({ login: 'Alex' }, { emitEvent: false });
  }
}
