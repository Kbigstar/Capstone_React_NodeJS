import * as React from 'react';
import { Avatar, Box, Button, Container, TextField } from "@mui/material";
// import { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function SignUp(props) { //회원가입 미완성
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name')
    })
  }

  const title_s = props.name

  const SelectFormat = () => {
      if(title_s === '회원가입'){
        return <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                component="form" 
                onSubmit={handleSubmit}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <AccountBoxIcon />
                </Avatar>

                <div>{title_s}</div>
            
                <TextField
                  margin="normal"
                  label="이메일 아이디"
                  fullWidth
                  name="email"
        
                  />
   

                <TextField
                  margin="normal"
                  label="비밀번호"
                  type="Password"
                  fullWidth
                  name="password"
                  />
   
                <TextField
                  margin="normal"
                  label="비밀번호 확인"
                  type="Password"
                  required
                  fullWidth
                  name="pwdCheck"
                  id="pwdCheck"
                 />


                <TextField
                  margin="normal"
                  label="이름"
                  fullWidth
                  name="name"
                  id="name"
                 
                />
                <Button type="submit" variant="outlined" sx={{ marginTop: 2, marginBottom: 3 }}>가입하기</Button> 
               
              </Box>
      } else if(title_s === '비밀번호찾기'){
        return  <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                  margin="normal"
                  label="이름"
                  fullWidth
                  name="name"
                  />
                  <TextField
                  margin="normal"
                  label="이메일 아이디"
                  fullWidth
                  name="email"
                  autoComplete="email"
                  autoFocus
                   />

                  <Button type="submit" variant="outlined" sx={{ marginTop: 2, marginBottom: 3 }}>비밀번호 찾기 </Button>
                </Box>
      }
  }

  return (
  <Container>
    <SelectFormat/>
  </Container>
  );


}

export default SignUp;

