import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Board() {
  const [article, setArticle] = useState([]);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState([]);




  useEffect(() => {
    axios.get('http://127.0.0.1:3001/board')
      .then(res => setArticle(res.data))
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

  const MoveDetail = () => {
    navigate(`/boardd`);
  };
  const onClick = (e) => {
    e.preventDefault()


    setTitle(e.target.name)
    console.log(title)
    axios.post("http://127.0.0.1:3001/boardDetail", {
      title: title
    }).then((res) => {
      console.log(res)
      const artdata = res.data
      setDetail(artdata)
    })



  }


  console.log(article);

  const menuList = article.map((menu, index) => (<Box sx={{
    width: 1150,
    height: 10,
    margin: 5,
    padding: 3,
  }} key={index}>

  </Box>));

  return (
    <Container fixed sx={{}}>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '119vh' }} >

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
              <TableCell align="right">{row.post_article}</TableCell>
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