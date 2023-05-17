import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Board() {
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();

  const onMove = (e) =>{
    e.preventDefault()
    navigate('/boardw')
  }

  const onClick = (e) => { //가져온 title을 article과 비교하여 뿌리기
    e.preventDefault()
    console.log(e.target.title)

    
  }
  useEffect(() => {
    axios.post('http://127.0.0.1:3001/board')
      .then(res => setArticle(res.data))
      .catch(err => console.log(err));
  }, []);





  console.log();

  // const menuList = article.map((menu, index) => (<Box sx={{
  //   width: 1150,
  //   height: 10,
  //   margin: 5,
  //   padding: 3, 
  // }} key={index}>

  // </Box>));

  return (
    <Container fixed sx={{}}>

      <Button variant="outlined" sx={{mb: '10px'}} onClick={onMove}>글 쓰기</Button>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '119vh'}} >

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>게시글 번호</TableCell>
              <TableCell align="right">제목</TableCell>
              <TableCell align="right">내용</TableCell>
              <TableCell align="right">작성일</TableCell>
              <TableCell align="right">작성자</TableCell>
              <TableCell align="right">조회수</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {article.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.post_num}
              </TableCell>
              <TableCell align="right">{row.post_title}</TableCell>
              <TableCell title={row.post_title} align="right" onClick={onClick}>{row.post_article}</TableCell>
              <TableCell align="right">{row.post_date}</TableCell>
              <TableCell align="right">{row.men_no}</TableCell>
              <TableCell align="right">{row.post_view}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>

      </Box>
    </Container>
  )

}
export default Board;

