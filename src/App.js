import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home.js";
import Login from "./page/Login/Login.js";
import Main_List from './page/Main_List/Main_List.js';
import Header from "./component/Header/Header.js";
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/main_list" element={<Main_List />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
