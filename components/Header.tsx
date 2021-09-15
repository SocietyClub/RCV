import React from "react"
import { Toolbar, IconButton, Typography, AppBar, Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import purple from '@material-ui/core/colors/purple';


function Header() {
	return (
<AppBar position="static" color="primary">
  <Toolbar>
    <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className="title">
      RCV
    </Typography>
  </Toolbar>
</AppBar>
	)
}



export default Header