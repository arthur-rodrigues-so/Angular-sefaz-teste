FROM quay.io/keycloak/keycloak:26.0.5

ENV KC_DB=postgres
ENV KC_DB_USERNAME=keycloak
ENV KC_DB_PASSWORD=keycloak_password
ENV KC_DB_URL_HOST=postgres
ENV KC_DB_URL_DATABASE=keycloak
ENV KC_HTTP_ENABLED: true 
ENV KC_HTTP_RELATIVE_PATH=/auth

RUN /opt/keycloak/bin/kc.sh build
