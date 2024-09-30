import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const drawerWidth = 240;
const navItems = [
  { label: 'المباريات', route: '/matches' },
  { label: 'البطولات', route: '/tournaments' },
  { label: 'الرئيسية', route: '/' },
];

function AppNavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item.route}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', margin: '10px 0', color: '#fff' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          {/* Align the MenuIcon to the right */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              flexGrow: 1,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.route} // Use Link to route
                sx={{
                  color: '#fff',
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' }, // Responsive button font size
                  padding: { xs: '6px 8px', sm: '8px 12px' }, // Adjust padding for smaller screens
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontSize: { sm: '1.3rem', md: '1.5rem' }, // Adjust the font size for larger screens
            }}
          >
            MUI
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end" // Align to the right
            onClick={handleDrawerToggle}
            sx={{
              ml: 2,
              display: { sm: 'none' },
              fontSize: { xs: '1.8rem', sm: '2rem' }, // Increase icon size for mobile
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} /> {/* Larger MenuIcon */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right"
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default AppNavBar;
