import {
  Button,
  List,
  ListItem,
  ListItemText,
  Menu,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function ProfileMenu(props) {
  const userProfile = useSelector((state) => state.sharedData.userProfile);
  return (
    <Menu
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      onClose={() => {
        props.close();
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      slotProps={{ paper: { sx: { minWidth: "150px", pr: 2, pl: 2, pt: 1 } } }}
    >
      <Stack direction={"column"} spacing={1}>
        <Button color="success" variant="contained">
          start working
        </Button>
        <Button color="warning" variant="contained">
          not ready
        </Button>
        <Button color="info" variant="contained">
          ready
        </Button>
        <Button color="error" variant="contained">
          stop working
        </Button>
        <List dense>
          <ListItem>
            <ListItemText
              primary={"Name"}
              secondary={userProfile?.firstName + " " + userProfile?.lastName}
            />
          </ListItem>
        </List>
      </Stack>
    </Menu>
  );
}
