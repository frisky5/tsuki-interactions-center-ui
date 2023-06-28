import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginCallback(props) {
  const navigate = useNavigate();

  const authenticated = useSelector((state) => state.sharedData.authenticated);
  const authenticationFailed = useSelector(
    (state) => state.sharedData.authenticationFailed
  );

  const [message, setMessage] = useState(
    "Awaiting Authentication, please wait..."
  );
  useEffect(() => {
    if (authenticationFailed && !authenticated) {
      setMessage("Authentication Failed, Please contact support...");
    } else {
      setMessage(
        "Autheticated Successfully, redirecting you to your homepage, pelase wait..."
      );
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [authenticated, authenticationFailed]);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} />
      <Typography>{message}</Typography>
    </Box>
  );
}
