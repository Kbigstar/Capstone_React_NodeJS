import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./component/AppBar";
import MainPage from "./component/MainPage";


function App() { //kwon bo sung
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<MainPage />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
