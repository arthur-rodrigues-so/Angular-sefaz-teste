import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';



@Component({
  selector: 'app-header',
  imports: [MatToolbar, RouterLink, CommonModule, MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  

  showNotifications = false;
  notifications = [
    { message: '5 Novas mensagem recebida', link: '/mensagens/1' },

  ];

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  // Detecta clique em qualquer lugar da tela
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Se clicou no botão ou dentro da box, não fecha
    if (
      target.closest('.notifications-box') ||
      target.closest('.notif-button')
    ) {
      return;
    }

    // Se clicou fora, fecha
    this.showNotifications = false;
  }
}

export class BadgeOverviewExample {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
