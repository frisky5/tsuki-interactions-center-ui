import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, CssBaseline } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { initKeycloak, loadKeycloakProfile } from "./keycloak/KeycloakHelper";
import { setAuthenticationFailed } from "./redux/slices/SharedDataSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    initKeycloak()
      .then((authenticated) => {
        if (authenticated) loadKeycloakProfile();
        else dispatch(setAuthenticationFailed(true));
      })
      .catch((reason) => {});
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <Container
        id="root-container"
        disableGutters
        maxWidth={false}
        sx={{ width: "100vw", height: "100vh" }}
      >
        <Outlet />
      </Container>
    </Fragment>
  );
}

export default App;
