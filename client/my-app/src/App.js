import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./component/Appbar";
import MainPage from "./component/MainPage";


function App() { //kwon bo sung
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<MainPage />} />    
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
