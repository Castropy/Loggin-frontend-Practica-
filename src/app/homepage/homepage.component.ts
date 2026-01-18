import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Importar ChangeDetectorRef
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class Homepage implements OnInit {
  showWelcome: boolean = true;

  // 2. Inyectarlo en el constructor
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showWelcome = false;
      console.log('Cambiando a contenido principal...');
      
      // 3. Notificar manualmente a Angular que hubo un cambio
      this.cdr.detectChanges(); 
    }, 2000);
  }
}