import { Routes } from '@angular/router';
import { FormComponent } from './features/components/form/form.component';
import { FormBuilderComponent } from './features/components/form-builder/form-builder.component';
import { FormRegistroComponent } from './features/components/form-registro/form-registro.component';
import { MultistepWizardComponent } from './features/components/multistep-wizard/multistep-wizard.component';
import { Multistep1Component } from './features/components/multistep-1/multistep-1.component';
import { Multistep2Component } from './features/components/multistep-2/multistep-2.component';
import { Home } from './features/components/home/home';

export const routes: Routes = [
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "formBuilder",
    component: FormBuilderComponent
  },
  {
    path: "formRegistro",
    component: FormRegistroComponent
  },
  {
    path: "multistepForm",
    component: MultistepWizardComponent
  },
  {
    path: "multistepForm1",
    component: Multistep1Component
  },
  {
    path: "multistepForm2",
    component: Multistep2Component
  },

  {
    path: "MultistepWizard",
    component: Multistep2Component
  },

   { path: 'home', component: Home },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: '**', redirectTo: 'home' }

];
