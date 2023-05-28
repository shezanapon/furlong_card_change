import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "../secondpage/main.css";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import SaveIcon from "@mui/icons-material/Save";
import { Button, Collapse } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import pic from "../pic/Furlong Painting Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Quiz from "./Quiz";
import SideBar from "./SideBar";
import HistoryPage from "../HistoryPage";

const lineStyle = {
  marginLeft: ".5rem",
  marginTop: 0,
  marginBottom: 0,
  display: "inline-block",
  width: "70%",
};

const drawerWidth = 380;

export default function Main() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const [history, setHistory] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
          sx={{
            bgcolor: "white",
            display: "flex",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              height: "71px",
              paddingTop: "10px",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              <MenuIcon
                sx={{
                  marginLeft: "5px",
                  marginRight: "20px",
                  ml: "auto",
                  paddingTop: "7px",
                }}
              />
              Furlong Painting Contractor Induction Program
            </Typography>
          </Box>
          <Box textAlign={"right"} width={"65%"}>
            <Button sx={{ bgcolor: "#106786", color: "white" }}>
              <SaveIcon />
              SAVE
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <img src={pic} alt="" />
        </Box>
        {/* <Toolbar /> */}

        <Divider />
        <SideBar history={history} setHistory={setHistory} />
      </Drawer>

      <Box
        p={4}
        sx={{
          width: "100%",
          borderRadius: "15px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        {history ? <HistoryPage /> : <Quiz />}
      </Box>
    </Box>
  );
}
