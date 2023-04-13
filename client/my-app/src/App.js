import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./component/AppBar";
import MainPage from "./component/MainPage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
    },
  },
});

function App() { //kwon bo sung
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Appbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
