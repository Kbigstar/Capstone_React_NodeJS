import React, {useEffect, useState} from "react";
import axios from "axios";
import { Box, Container } from "@mui/material";
import {useNavigate} from 'react-router-dom';

function Board() {
  const [article, setArticle] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
      axios.get('http://127.0.0.1:3001/board')
      .then(res=>setArticle(res.data))
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

    const MoveDetail = () => {
        navigate(`/boardd`); 
    };
  const onClick = (e) => {
    e.preventDefault()
    
    setTitle(e.target)
    console.log(title)
    axios.get("http://127.0.0.1:3001/boardDetail",{
      title : title
    
    })
    
  }
 const post = article.map(function(element, idx){
    return <p key={idx}>{element.post_num} <a onClick={onClick}>{element.post_title}</a> {element.mem_no} {element.post_date}</p>
  
  })
  
  //console.log(post);
  return (
    <div className="App">
      <Container>
        <Box>{post}</Box>
        <Box marginTop='20%'/>
        <Box width='100%' component="img" src="https://cdn.pixabay.com/photo/2022/12/19/20/04/duck-7666456__340.jpg" />
      </Container>
    </div>
  )

}
export default Board;