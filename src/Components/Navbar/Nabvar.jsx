import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const Nabvar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (

    <AppBar position="fixed" sx={{backgroundColor: "black"}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678799666/CODEFISIC/logoCodeFisic_2_x46isb.png" alt="logo" className='imgNav' /> 
        </Typography>
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
      <Typography className='blog'>BLOG</Typography>
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
          }}
        >
        <img className='imgSmall' src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1679401407/CODEFISIC/smallLogo_cimu6f.png" alt="logo"/>
        </Typography>

        <Box className= "buttons" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button className='button'>NOSOTROS</Button>
      <Button className='button'>SERVICIOS</Button>
      <Button className='button'>CONTACTO</Button>
      <Button className='blog'>BLOG</Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    );
  }
export default Nabvar



{/* <Navbar  bg="dark" expand="lg">
<div className='arriba' >
  <div>
   <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678799666/CODEFISIC/logoCodeFisic_2_x46isb.png" alt="logo" className='imgNav' />
</div>

<div className='navbar'>

<Navbar.Collapse id="navbarScroll">
  <Nav className='items'>
    <Nav.Link className='buttons'>NOSOTROS</Nav.Link>
    <Nav.Link className='buttons'>SERVICIOS</Nav.Link>
    <Nav.Link className='buttons'>CONTACTO</Nav.Link>
    <Nav.Link className='buttons'>BLOG</Nav.Link>
  </Nav>
</Navbar.Collapse> 

</div>

<Navbar.Toggle className='icon' aria-controls="navbarScroll" />
</div>
</Navbar> */}


{/* <Navbar className='navbar' bg="dark" expand="lg">

<div className='contenedor'>
  <div>
     <Navbar.Brand className='imgSmall'href="#home"><img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1679401407/CODEFISIC/smallLogo_cimu6f.png" alt="logo"/></Navbar.Brand>
  <Navbar.Brand className='imgNav'href="#home"><img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678799666/CODEFISIC/logoCodeFisic_2_x46isb.png" alt="logo"/></Navbar.Brand>
  </div>
<Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
 <div className='colapse'>
      <Navbar.Collapse id="basic-navbar-nav">
    <Nav  className="ms-auto nav">
      <Nav.Link className='link' href="#">NOSOTROS</Nav.Link>
      <Nav.Link className='link' href="#">SERVICIOS</Nav.Link>
      <Nav.Link className='link' href="#">CONTACTO</Nav.Link>
      <Nav.Link className='blog' href="#">BLOG</Nav.Link>
    </Nav>
  </Navbar.Collapse>      
 </div>
</div>
</Navbar> */}