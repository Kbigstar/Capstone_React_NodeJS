import { Box, Container } from "@mui/material";

function MainPage() {

  return (
    <div className="App">
      <Container>
        <Box marginTop='20%'/>
        <Box width='100%' component="img" src="https://cdn.pixabay.com/photo/2023/04/05/15/39/animal-7901753__340.jpg" />
      </Container>
    </div>
  )

}
export default MainPage;