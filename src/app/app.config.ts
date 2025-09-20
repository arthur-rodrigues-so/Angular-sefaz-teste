import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideKeycloakAngular } from '../../keycloak/keycloak.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { includeBearerTokenInterceptor } from 'keycloak-angular';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes, 
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),),
    provideAnimations(),
    provideKeycloakAngular(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
   
  ]
};