import * as React from 'react';
import { 
    Avatar, 
    Box, 
    Button, 
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
 } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import SignUp from './SignUp'

function Login(){ // 로그인 기본예제 틀

    const [open, setOpen] = React.useState(false);
    const [title, settitle] = React.useState("");
    const handleClickOpen = (e) => {
        
        const currentname = e.target.name;

        if(currentname === "register"){
            settitle("회원가입")
        } 
        else if(currentname === "forgot"){
            settitle("비밀번호찾기")
        }


        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


   return  (
    
    <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
        <Avatar sx={{ m:1, bgcolor:'secondary.main'}}>
            <LockOutlinedIcon /> 
        </Avatar>
        
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>

        <TextField  
            margin="normal"
            label="Email Address" 
            required
            fullWidth 
            name="email"
            autoComplete="email"
            autoFocus
        />
        
        <TextField  
            label="Password" 
            type="Password"
            margin="normal"
            required
            fullWidth
            name="password"
            id="password"
            autoComplete="current-password"
         />
        
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
        />
        
        <Button type="submit" fullWidth variant="contained" sx={ {mt:3, mb:2} }>
            로그인</Button>

        <Grid container>
            <Grid item xs>
                <Link name="forgot"onClick={handleClickOpen}>Forgot_password?</Link>
            </Grid>
            <Grid item>
                <Link name="register"onClick={handleClickOpen}>Sign_Up</Link>
            </Grid>
        </Grid>
        </Box>

        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            
            </DialogTitle>
            <DialogContent>
                <SignUp name={title}/> 
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
        </div>

        </Container>
        

          

    );
}
export default Login;



