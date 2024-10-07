import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Header from "./component/Header/Header.js";
import Home from "./page/Home/Home.js";
import Login from "./page/Login/Login.js";
import Main_List from './page/Main_List/Main_List.js';
import Write from "./page/Write/Write.js";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/main_list" element={<Main_List />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Write" element={<Write />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
