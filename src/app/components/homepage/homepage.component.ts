import { Component, OnInit, signal, inject, HostListener, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class Homepage implements OnInit {
  private router = inject(Router);
  private eRef = inject(ElementRef);

  showWelcome = signal(true);
  menuAbierto = signal(false);
  showLogoutModal = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.showWelcome.set(false);
    }, 2000);
  }

  toggleMenu() {
    this.menuAbierto.update(v => !v);
  }

  // Cierra el menú si se hace clic fuera del componente
  @HostListener('document:click', ['$event'])
  clickOut(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.menuAbierto.set(false);
    }
  }

  // Abre el modal de confirmación
  solicitarCierreSesion() {
    this.showLogoutModal.set(true);
    this.menuAbierto.set(false);
  }

  cancelarCierreSesion() {
    this.showLogoutModal.set(false);
  }

  ejecutarCierreSesion() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/']);
  }
}