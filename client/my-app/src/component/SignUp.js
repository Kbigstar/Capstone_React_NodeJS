import * as React from 'react';
import { Avatar, Box, Button, Container, TextField, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function SignUp(props) { //회원가입 미완성
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
                  helperText={email === "" ? '이메일 아이디를 입력해주세요 ' : ' '} />

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
                  helperText={pwd === "" ? '비밀번호를 입력해주세요 ' : ' '} />
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
                  error={pwd !== pwdCheck}
                  helperText={pwd !== pwdCheck ? '비밀번호가 다릅니다. ' : ' '} />

                <TextField
                  margin="normal"
                  label="이름"
                  fullWidth
                  name="name"
                  id="name"
                />
                <Button variant="outlined" sx={{ marginTop: 2, marginBottom: 3 }} onClick={(event) => {
                  event.preventDefault();
                  if (pwd !== pwdCheck) {
                    alert('비밀번호가 일치하지 않습니다!!')
                    setPwd('');
                    setPwdCheck('');
                  }
                }}> 가입하기 </Button>
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
                  onChange={onEmailChange}
                  value={email}
                  error={email === ""}
                  helperText={email === "" ? '이메일 아이디를 입력해주세요 ' : ' '} />

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

