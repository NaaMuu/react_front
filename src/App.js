import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./page/Home/Home.js";
import Login from "./page/Login/Login.js";
import Main_List from './page/Main_List/Main_List.js';
import Header from "./component/Header/Header.js";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/main_list" element={<Main_List />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
