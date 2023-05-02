import * as React from 'react';
import { Avatar, Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function SignUp(props) { //회원가입 미완성
  
  const [data, setData] = useState({
    email: "",
    pwd: "",
    name: "",
  })

  const event_handler = (e) =>{
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


  const onSubmit = (e) => {
    e.preventDefault()
    console.log('보내짐')
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
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <AccountBoxIcon />
                </Avatar>

                <div>{title_s}</div>
                <form onSubmit={onSubmit}>
                <TextField
                  margin="normal"
                  label="이메일 아이디"
                  fullWidth
                  name="email"
                  id='email'
                  onChange={event_handler}/>
   

                <TextField
                  margin="normal"
                  label="비밀번호"
                  type="Password"
                  fullWidth
                  name="password"
                  id="pwd"
                  onChange={event_handler}/>
   
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
                  onChange={event_handler}
                />
                <Button type="submit" variant="outlined" sx={{ marginTop: 2, marginBottom: 3 }}>가입하기</Button> 
                </form>
              </Box>
      } else if(title_s === '비밀번호찾기'){
        return  <Box><TextField
                  margin="normal"
                  label="이름"
                  fullWidth
                  name="name"
                  id="name"
                  />

                  <TextField
                  margin="normal"
                  label="이메일 아이디"
                  fullWidth
                  name="email"
                  autoComplete="email"
                  autoFocus
                   />

                  <Button  variant="outlined" sx={{ marginTop: 2, marginBottom: 3 }}>비밀번호 찾기 </Button>
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

