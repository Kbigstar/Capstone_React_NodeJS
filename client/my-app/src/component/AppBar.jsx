import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
  { display: 'HOME', url: '/' }, { display: 'ChatGPT', url: '/ChatGPT' }, { display: 'Board', url: '/Board' }];

function Appbar() {
  const navi = useNavigate();
  const location = useLocation();

  const handleMenu = (e) => {
    console.log(e.currentTarget.id);
    console.log(location.pathname);
  };

  return (
    <AppBar position="static" color="inherit" sx={{ boxShadow: 0 }}>
      <Container maxWidth="lg" sx={{ mt: '20px', mb: '20px' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={()=> navi('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              //letterSpacing: '.3rem', 자간설정
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Capstone
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
            {pages.map((page) => (
              <Button
                key={page.display}
                id={page.display}
                onClick={handleMenu}
                sx={{ my: 2, display: 'block', color: location.pathname === page.url ? '#3f51b5' : 'black', fontWeight: 700, mr: '30px' }}
              >
                {page.display}
              </Button>
            ))}
            <Button sx={{ my: 2, display: 'block', border: 2, borderColor: '#3f51b5', background: '#3f51b5', color: '#ffffff', p: '12px', fontWeight: 700, }}>
              GET STARTED
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;