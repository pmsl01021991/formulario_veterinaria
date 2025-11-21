import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  myFormBuilder: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myFormBuilder = this.fb.group({
      name: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(1)]],
    });
  }

  submit() {
    console.log(this.myFormBuilder.value);
  }
}
