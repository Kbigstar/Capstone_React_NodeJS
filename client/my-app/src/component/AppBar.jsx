import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
  { display: 'HOME', url: '' },
  { display: 'ChatGPT', url: 'ChatGPT' },
  { display: 'Board', url: 'Board' }
];

function Appbar() {
  const navi = useNavigate();
  const location = useLocation();

  const handleMenu = (e) => {
    for (var i in pages)
      if (e.currentTarget.id === pages[i].display)
        navi(pages[i].url)
  };
  
  return (
    <AppBar position="static" color="inherit" sx={{ boxShadow: 0 }}>
      <Container maxWidth="lg" sx={{ mt: '20px', mb: '20px' }}>
        <Toolbar disableGutters>
          <LogoButton navi={navi} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
            {pages.map((page) => (
              <MenuButton page={page} handleMenu={handleMenu} location={location} />
            ))}
            <LoginButton isActivation={true} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;

function LogoButton(props) {
  const { navi } = props;
  const style = {
    mr: 2, 
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <Typography variant="h6" noWrap component="a" onClick={() => navi('/')} sx={style} >
      Capstone
    </Typography>
  );
}

function LoginButton(props) {
  const { isActivation } = props;
  const style = { my: 2, display: 'block', border: 2, borderColor: '#3f51b5', background: '#3f51b5', color: '#ffffff', p: '12px', fontWeight: 700, }

  return (
    isActivation ? <Button sx={style}>
      GET STARTED
    </Button> : <></>
  );
}

function MenuButton(props) {
  const { page, handleMenu, location } = props;
  const style = { my: 2, display: 'block', color: location.pathname === ('/' + page.url) ? '#3f51b5' : 'black', p: '12px', fontWeight: 700, mr: '30px' }

  return (
    <Button key={page.display} id={page.display} onClick={handleMenu} sx={style}>
      {page.display}
    </Button>
  );
}
