
import { Box, Container, Button, TextField } from "@mui/material";




function BoardDetail(){



    return (
        <Container component="main" maxWidth="sm" sx={{mt:5}}>
            <Box>
                <div>
                <p>게시글 번호:</p>
                <div>제목</div>
                        <TextField margin="normal"
                            label="" 
                            required
                            fullWidth 
                            name="title"
                            autoComplete="Title"
                            id="title"
                            autoFocus
                        ></TextField>
                    
                    <p>게시글 내용</p>
                </div>
            </Box>  
        </Container>
    );
}export default BoardDetail;