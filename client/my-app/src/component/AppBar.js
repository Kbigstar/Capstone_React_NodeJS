import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['HOME', 'ChatGPT', 'Board'];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    console.log(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
    console.log(event.currentTarget);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="lg" sx={{ mt: '20px' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
              
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color: 'black', fontWeight: 700, mr: '30px'}}
              >
                {page}
              </Button>
            ))}
            <Button sx={{ my: 2, display: 'block', border: 1, color: 'black', fontWeight: 700,}}>
              GET STARTED
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;