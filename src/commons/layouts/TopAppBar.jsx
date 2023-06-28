import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import ProfileMenu from "../menus/ProfileMenu";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutKeycloak } from "../../keycloak/KeycloakHelper";

export default function TopAppBar(props) {
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <IconButton
            color="inherit"
            onClick={(e) => {
              setProfileMenuAnchor(e.target);
            }}
          >
            <AccountCircleIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={(e) => {
              logoutKeycloak();
            }}
          >
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <ProfileMenu
        anchorEl={profileMenuAnchor}
        close={() => {
          setProfileMenuAnchor(null);
        }}
      />
    </AppBar>
  );
}
