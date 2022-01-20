import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import {GiSpellBook} from "react-icons/gi"
import {BiCategoryAlt} from "react-icons/bi"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import {GiBookshelf} from "react-icons/gi"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import GroupAddIcon from "@mui/icons-material/GroupAdd"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "black" },
        },
      })}
    >
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
        <List>
          <ListItem>
            <ListItemIcon>
              <GiBookshelf style={{fontSize:"30"}}/>
            </ListItemIcon>
            <ListItemText primary="My books dashboard" />
          </ListItem>
        </List>
        <List>
          <Link to="/books">
            <ListItem button>
              <ListItemIcon>
                <GiSpellBook style={{fontSize:"25"}} />
              </ListItemIcon>
              <ListItemText primary="books" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/categories">
            <ListItem button>
              <ListItemIcon>
                <BiCategoryAlt />
              </ListItemIcon>
              <ListItemText primary="categories" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List style={{ marginTop: "auto" }}>
          <Link to="/login">
            <ListItem button>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
