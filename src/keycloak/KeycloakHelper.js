import Keycloak from "keycloak-js";
import ReduxStore from "../redux/ReduxStore";
import {
  setAuthenticated,
  setUserProfle,
} from "../redux/slices/SharedDataSlice";

export const keycloak = new Keycloak({
  url: "http://frisky5-s1:8080",
  realm: "master",
  clientId: "tsuki-ic",
});

export function initKeycloak() {
  return keycloak.init({
    redirectUri: "http://localhost:5173/login/callback",
    onLoad: "login-required",
  });
}

export function logoutKeycloak() {
  keycloak.logout({ redirectUri: "http://localhost:5173" });
}

export function loadKeycloakProfile() {
  keycloak
    .loadUserProfile()
    .then((profile) => {
      ReduxStore.dispatch(setUserProfle(profile));
      ReduxStore.dispatch(setAuthenticated(true));
    })
    .catch((reason) => {
      console.error("failed to load keycloak profile : ", reason);
    });
}
