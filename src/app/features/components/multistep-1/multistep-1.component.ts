import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multistep-1',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './multistep-1.component.html',
  styleUrl: './multistep-1.component.css'
})
export class Multistep1Component {
  formStep1: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formStep1 = this.fb.group({
      nombre: [''],
      apellido: ['']
    });
  }

  continuar() {
    console.log('Paso 1 completado:', this.formStep1.value);
    this.router.navigate(['/multistepForm2']);
    // Aquí normalmente cambiarías de paso en un componente padre
  }
}
