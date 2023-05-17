import * as React from 'react';
import { Box, Container, TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


function BoardWrite(){

    const [article, setArticle] = React.useState({
        title: "",
        detail: "",
    });
    
    const navigate = useNavigate();


    const event_handler = (e) => { 
        const newArticle = {...article};
        newArticle[e.target.id] = e.target.value;
        setArticle(newArticle);
        console.log(newArticle);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:3001/boardwrite",{ //POST
            title: article.title,
            detail: article.detail
        })
        console.log(e.target.value);
        
        console.log("전송완료");
    }    
   
    const onClick = (e) =>{
        e.preventDefault()
    
        if(e.target.id === "delete")
        {
            alert("게시글 작성을 취소합니다") //mui alert로 바꾸기
            navigate('/board')
        }

    }
    return(
       <Container component="main" maxWidth="sm" sx={{mt:5}}>
           
            <Box>
                <form onSubmit={onSubmit}>
                    <div>제목</div>
                        <TextField margin="normal"
                            label="" 
                            required
                            fullWidth 
                            name="title"
                            autoComplete="Title"
                            id="title"
                            autoFocus
                            onChange={event_handler}></TextField>
                    <div>내용</div>
                        <textarea 
                        id="detail" name="detail" rows="20" cols="76"
                        placeholder="내용을 입력 해주세요.."
                        onChange={event_handler}>
                        </textarea>

                    <Button type="submit" variant="contained" size="large" sx={ {mt:3, mb:2} }>
                        작성</Button>
                    <Button id="delete" color="error" type="submit" variant="contained" size="large" onClick={onClick} sx={ {mt:3, mb:2} }>
                        취소</Button>
                </form>
            </Box>

       </Container>
    );
} export default BoardWrite;
