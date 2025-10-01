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

  name?: string;
  email?: string;

  constructor() {
    const token = this.keycloak.token

    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.user = {
          name: this.name = payload.name,
          email: this.email = payload.email,
          picture: payload.picture
        }
       console.log(payload.picture) 
       console.table('Payload do token', payload); 
      }
      
  }
}
