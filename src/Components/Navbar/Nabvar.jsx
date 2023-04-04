import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



const Nabvar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (

    <AppBar position="fixed" sx={{backgroundColor: "rgba(22, 22, 22, 1)"}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
       <Link to="/"><Typography
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          
          <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678799666/CODEFISIC/logoCodeFisic_2_x46isb.png" alt="logo" className='imgNav' /> 
        </Typography></Link> 
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton className='icon'
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu className='menu'
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            
      <Typography className='button'>NOSOTROS</Typography>
      <Typography className='button'>SERVICIOS</Typography>
      <Typography className='button'>CONTACTO</Typography>
     <Link to="blog"> <Typography className='blog'>BLOG</Typography></Link>
          </Menu>
        </Box>
        <Link to="/"><Typography
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
          }}
        >
        <img className='imgSmall' src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1679401407/CODEFISIC/smallLogo_cimu6f.png" alt="logo"/>
        </Typography></Link>

        <Box className= "buttons" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <HashLink smooth to="/#nosotros">
             <Typography className='button'>NOSOTROS</Typography> 
          </HashLink>
       <HashLink smooth to="/#servicios">
      <Typography className='button'>SERVICIOS</Typography>
       </HashLink>
       <HashLink smooth to="/#contacto">
        <Typography className='button'>CONTACTO</Typography>
        </HashLink>
      <Link to="blog"> <Typography className='blog'>BLOG</Typography></Link>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    );
  }
export default Nabvar