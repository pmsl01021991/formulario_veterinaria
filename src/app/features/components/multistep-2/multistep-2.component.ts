import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multistep-2',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './multistep-2.component.html',
  styleUrl: './multistep-2.component.css'
})
export class Multistep2Component {
  formStep2: FormGroup;

    constructor(private fb: FormBuilder) {
      this.formStep2 = this.fb.group({
        emails: this.fb.array([
          this.fb.control(''),
          this.fb.control('')
        ])
      });
    }

    get emails(): FormArray {
      return this.formStep2.get('emails') as FormArray;
    }

    agregarEmail() {
      this.emails.push(this.fb.control(''));
    }

    finalizar() {
      console.log('Paso 2 completado:', this.formStep2.value);
    }
}
