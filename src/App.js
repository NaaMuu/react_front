import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./page/Login/Login.js";
import Home from "./page/Home/Home.js";
import Header from "./component/Header/Header.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
