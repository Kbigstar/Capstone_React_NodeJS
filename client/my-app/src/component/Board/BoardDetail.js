import React, {useEffect, useState} from "react";
import { Box, Container, Button, TextField } from "@mui/material";
import axios from "axios";



function BoardDetail(){
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/boardDetail')
        .then(res=>setArticle(res.data))
        .catch(err => console.log(err));
    }, []);

    console.log(article)
    const post = article.map(function(element, idx){
        return <p key={idx}>{element.post_num} {element.post_title} {element.mem_no} {element.post_date}</p>;
      
      })
      
     
      console.log(post);
      return (
        <div className="App">
          <Container>
            <Box>{post}</Box>
            <Box marginTop='20%'/>
            <Box width='100%' component="img" src="https://cdn.pixabay.com/photo/2022/12/19/20/04/duck-7666456__340.jpg" />
          </Container>
        </div>
      );
    
}export default BoardDetail;