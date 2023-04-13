import { Box, Container } from "@mui/material";

function Board() {

  return (
    <div className="App">
      <Container>
        <Box marginTop='20%'/>
        <Box width='100%' component="img" src="https://cdn.pixabay.com/photo/2022/12/19/20/04/duck-7666456__340.jpg" />
      </Container>
    </div>
  )

}
export default Board;