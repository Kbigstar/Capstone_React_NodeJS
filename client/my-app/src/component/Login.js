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
import SignUp from './SignUp';

function Login(){ // 로그인 기본예제 틀
    const [setsign,signswich]=React.useState(false);

   return  (
    
    <Container component="main" maxWidth="xs" >
        {setsign && <SignUp/>}
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
                <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
                <Link onClick={()=>signswich(!setsign)}>Sign Up</Link>
            </Grid>
        </Grid>
        </Box>
        </Container>
    );
}
export default Login;