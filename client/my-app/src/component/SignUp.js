import * as React from 'react';
import { Avatar, Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function SignUp(){ //회원가입 미완성
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdCheck, setPwdCheck] = useState("");


    const onEmailChange = (e) => {
        setEmail(e.target.value); //이메일아이디 이벤트값 설정
    }
    const onPwdChange = (e) => {
        setPwd(e.target.value); //비밀번호 이벤트값 설정
    }
    const onPwdCheckChange = (e) => {
        setPwdCheck(e.target.value); //비밀번호 확인 이벤트값 설정
    }


return (
    <Container component="main" maxWidth="sm">
    
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            
             <Avatar sx={{ m:1, bgcolor:'secondary.main'}}>
                <AccountBoxIcon /> 
            </Avatar>

            <Typography component="h1" variant="h5">회원가입</Typography>
        
            <TextField  
                margin="normal"
                label="이메일 아이디" 
                fullWidth
                name="email"
                autoComplete="email"    
                autoFocus
                onChange={onEmailChange}
                value={email}
                error={email === ""}
                helperText={email === "" ? '이메일 아이디를 입력해주세요 ' : ' '}/>

             <TextField  
              margin="normal"
              label="비밀번호" 
              type="Password"              
              fullWidth
              name="password"
              id="password"
              autoComplete="current-password"
              onChange={onPwdChange}
              value={pwd}
              error={pwd === ""}
              helperText={pwd === "" ? '비밀번호를 입력해주세요 ' : ' '}/>
            <TextField  
              margin="normal"
              label="비밀번호 확인" 
              type="Password"              
              required
              fullWidth
              name="pwdCheck"
              id="pwdCheck"
              autoComplete="current-password"
              onChange={onPwdCheckChange}
              value={pwdCheck}
              error={pwdCheck === ""}
              helperText={pwdCheck === "" ? '비밀번호를 확인해주세요 ' : ' '}/>
            
            <TextField   sx={{
                    width: 0.3, mt: 1,}}
              margin="normal"
              label="이름"       
              //fullWidth
              name="name"
              id="name"
              />
            
            {/* 생년월일 테스트 */}
          <LocalizationProvider dateAdapter={AdapterDayjs}> 
            <DemoContainer components={['DatePicker']}>
                <DatePicker label="생년월일" 
                 format="YYYY-MM-DD"
                 
                />
            </DemoContainer>
          </LocalizationProvider>
        </Box>    
    </Container>
        
    );
} export default SignUp;