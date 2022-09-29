import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
const menuItems = [
  {
    icon: (<HomeIcon />),
    text: "Home",
  },
  {
    icon: (<InfoIcon />),
    text: "About",
  },

  {
    icon: (<CallIcon />),
    text: "Contact",
  }
]
const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <Box >
      <AppBar sx={{backgroundColor : 'transparent', boxShadow : 'none'}}>
        <Toolbar>
          <Link to={'/'} style={{ flexGrow: 1 , width : '55%' }}>
            <Typography variant="h4" fontSize={30} fontWeight={'bold'} component="div" sx={{ flexGrow: 1 }}>
              nasa space
            </Typography>
          </Link>
          <Box sx={{ display: { sm: 'flex', xs: 'none' }, width: { xl : '20%' , lg : '25%' , sm : '45%'} ,justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography fontSize={18} fontWeight={500}>Home</Typography>
            <Typography fontSize={18} fontWeight={500}>About</Typography>
            <Typography fontSize={18} fontWeight={500}>Details</Typography>
            <Typography fontSize={18} fontWeight={500}>contact</Typography>
          </Box>
          <Box sx={{ display: { sm: 'none', xs: 'flex' } }}>
            <IconButton onClick={() => setOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor='right' open={open} onClose={() => setOpen(false)} >
              <Box sx={{ width: '250px', bgcolor: '#000', height: '100%', color: 'white' }}>
                <List >
             
                  {menuItems.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemButton>
                      
                      <ListItemIcon sx={{ color: "white" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />

                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar