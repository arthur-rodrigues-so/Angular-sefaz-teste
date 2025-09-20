import { provideKeycloak, createInterceptorCondition, withAutoRefreshToken, AutoRefreshTokenService, UserActivityService, INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG, IncludeBearerTokenCondition } from 'keycloak-angular';

//Todo esse arquivo é a aplicação do Keycloak no angular

const localhostCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:8181)(\/.*)?$/i
});

export const provideKeycloakAngular = () => 
  provideKeycloak({
    config: {
      realm: 'master',
      url: 'http://localhost/auth/',
      clientId: 'myClient'
    },
    initOptions: {
      onLoad: 'login-required',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      redirectUri: window.location.origin + '/home'
    },
    features: [
      withAutoRefreshToken({
        onInactivityTimeout: 'logout',
        sessionTimeout: 60000
      })
    ],
    providers: [
      AutoRefreshTokenService,
      UserActivityService,
      {
        provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
        useValue: [localhostCondition]
      }
    ]
  });