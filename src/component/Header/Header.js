import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const { isLogIn, setIsLogIn } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 토글 메뉴 상태 관리

    const handleLogin = () => {
        navigate("/login");
    };

    const handleProtectedNavigation = (e, path) => {
        if (!isLogIn) {
            e.preventDefault(); // 기본 링크 동작을 막음
            alert("로그인이 필요합니다.");
            navigate("/login");
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        if (!isLogIn) {
            setIsMenuOpen(false);
        }
    }, [isLogIn]);
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("로그아웃 되었습니다.");
        setIsLogIn(false);
        setIsMenuOpen(false);
        navigate("/login");
    };
    
    return (
        <div className="header">
            <Link to="/" className="header_logo">로고</Link>
            <div className="header_left">
                <nav className="header_nav">
                    <Link to="/main_list" onClick={(e) => handleProtectedNavigation(e, "/main_list")}>메인리스트</Link>
                    <Link to="/my_list" onClick={(e) => handleProtectedNavigation(e, "/my_list")}>내리스트</Link>
                    <Link to="/nav3" onClick={(e) => handleProtectedNavigation(e, "/nav3")}>카테고리_여분</Link>
                </nav>
            </div>
            <div className="header_right">
                {isLogIn ? (
                    <div className="dropdown">
                        <button onClick={toggleMenu} className="menu">
                            <IoMenu size={40} color="white" />
                        </button>
                        {isMenuOpen && (
                            <ul className="dropdown_menu">
                                <Link to="/my_info" style={{ textDecoration: 'none', color: 'white' }}><li>내정보</li></Link>
                                <li onClick={handleLogout}>로그아웃</li>
                            </ul>
                        )}
                    </div>
                ) : (
                    <button onClick={handleLogin} className="login">로그인</button>
                )}
            </div>
        </div>
    );
};

export default Header;
