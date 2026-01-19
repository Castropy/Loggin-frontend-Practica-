import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AccesoDenegadoComponent } from './components/acceso-denegado/acceso-denegado.component';
import { authGuard } from './auth/auth-guard';
import { Homepage } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },       // ruta por defecto
  { path: 'registro', component: RegistroComponent }, // ruta para registro
  { path: 'homepage', component: Homepage, canActivate: [authGuard] }, // ruta para homepage
  { path: 'acceso-denegado', component: AccesoDenegadoComponent }, //Ruta para acceso denegado
];
