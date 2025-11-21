import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class Home {

  formRegistro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formRegistro = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', Validators.required],
      nombreMascota: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['macho', Validators.required],
      servicio: ['generales', Validators.required],
      aceptar: [false, Validators.requiredTrue],
    });
  }

  enviar() {
    if (this.formRegistro.invalid) {
      this.formRegistro.markAllAsTouched();
      return;
    }
    const nuevoRegistro = this.formRegistro.value;
    const registrosPrevios = JSON.parse(localStorage.getItem('registros') || '[]');
    registrosPrevios.push(nuevoRegistro);
    localStorage.setItem('registros', JSON.stringify(registrosPrevios));
    console.log('Guardado en localStorage:', registrosPrevios);
    this.formRegistro.reset({
      sexo: 'macho',
      servicio: 'generales',
      aceptar: false
    });
  }



}
