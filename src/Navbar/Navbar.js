
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';


// const Navbar = ({ components }) => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6">Movie Zone</Typography>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <List>
//           {components.map((component) => (
//             <Link key={component.to} to={component.to}>
//               <ListItem button onClick={toggleDrawer(false)}>
//                 <ListItemIcon>{component.icon}</ListItemIcon>
//                 <ListItemText primary={component.label} />
//               </ListItem>
//             </Link>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export { Navbar };







import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ components }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar position="fixed" style={{ top: visible ? '0' : '-64px', transition: 'top 0.3s' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Movie Zone</Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {components.map((component) => (
            <Link key={component.to} to={component.to}>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemIcon>{component.icon}</ListItemIcon>
                <ListItemText primary={component.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;

