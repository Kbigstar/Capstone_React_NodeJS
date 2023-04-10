import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./component/AppBar";
import MainPage from "./component/MainPage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

function App() { //kwon bo sung
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
