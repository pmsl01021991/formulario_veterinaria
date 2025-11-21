import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-registro.component.html',
  styleUrl: './form-registro.component.css'
})
export class FormRegistroComponent {
  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    edad: new FormControl(18, [Validators.required, Validators.min(1)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    genero: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    terminos: new FormControl(false, Validators.requiredTrue),
    notificaciones: new FormControl(true),
  });

  submit() {
    console.log("Datos enviados:", this.form.value);
  }
}
