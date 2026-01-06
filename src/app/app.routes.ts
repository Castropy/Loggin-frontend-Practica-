import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },       // ruta por defecto
  { path: 'registro', component: RegistroComponent } // ruta para registro
];
