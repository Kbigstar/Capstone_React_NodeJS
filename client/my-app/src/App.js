import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./component/AppBar";
import MainPage from "./component/MainPage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ffffff',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
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
