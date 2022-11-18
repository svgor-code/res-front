import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";

import PageSidebar from "src/components/PageSidebar/PageSidebar";

type Props = {
  name: string;
};

const CustomAppBar = styled(AppBar)({
  "& .MuiContainer-root": {
    backgroundColor: " #051424",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: " center",
    position: "relative",
    width: "95%",
    margin: "0 0 0 5%",
  },
  "& .MuiPaper-root": {
    backgroundColor: " #051424",
    fontSize: 14,
  },
  "& .MuiAvatar-root": {
    border: "3px solid #164370",
  },
  "& .MuiTypography-root": {
    color: "#748BA0",
    fontSize: 14,
    margin: "0 0 0 10px",
  },
});
const styles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const PageHeader = ({ name }: Props) => {
  return (
    <CustomAppBar position="static">
      <AppBar position="static">
        <Container maxWidth="xl">
          <PageSidebar />
          <Typography>Hello, {name}, Welcome to Spoon</Typography>
          <Toolbar disableGutters>
            <Box sx={styles}>/menu and date picker/</Box>
          </Toolbar>
          <Toolbar disableGutters>
            <Box sx={styles}>
              <ListItem>/last login/</ListItem>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              <ListItem>{name}</ListItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </CustomAppBar>
  );
};

export default PageHeader;
