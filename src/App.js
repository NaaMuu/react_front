import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./page/Home/Home.js";
import Login from "./page/Login/Login.js";
import Main_List from './page/Main_List/Main_List.js';
import Header from "./component/Header/Header.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main_list" element={<Main_List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
