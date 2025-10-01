import { Component, effect, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { KEYCLOAK_EVENT_SIGNAL, KeycloakEventType, typeEventArgs, ReadyArgs } from 'keycloak-angular'
import { Router } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  authenticated = false;
  keycloakStatus: string | undefined;

  private readonly keycloak = inject(Keycloak);
  private readonly keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

  name?:string;
  email?:string; 

  constructor(private router: Router) {
    effect(() => {
      const keycloakEvent = this.keycloakSignal();

      this.keycloakStatus = keycloakEvent.type;

      if (keycloakEvent.type === KeycloakEventType.Ready) {
        this.authenticated = typeEventArgs<ReadyArgs>(keycloakEvent.args);
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this.authenticated = false;
      }
      
    });
  }

  login() {
    this.keycloak.login();
  }
  
  logout() {
    this.keycloak.logout();
  }
}
