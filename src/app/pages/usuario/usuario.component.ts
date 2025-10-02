import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-usuario',
  imports: [NgIf],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  private readonly keycloak = inject(Keycloak);
  user: any;

  constructor() {
    const token = this.keycloak.token

    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const UserID = payload.preferred_username;
        this.user = {
          name: payload.name,
          email: payload.email,
          picture: `${UserID}.jpeg`
        }
        console.table(payload)
      }
      
  }
}
