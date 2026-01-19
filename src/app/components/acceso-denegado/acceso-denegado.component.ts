import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 

@Component({
  selector: 'app-acceso-denegado',
  standalone: true, 
  imports: [RouterModule], // <---  para que funcionen los botones
  templateUrl: './acceso-denegado.component.html',
  styleUrl: './acceso-denegado.component.css',
})
export class AccesoDenegadoComponent { // Nombre estándar
}