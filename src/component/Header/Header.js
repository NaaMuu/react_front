import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { isLogIn, setIsLogIn } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("로그아웃 되었습니다.");
        setIsLogIn(false); // 로그인 상태 갱신
        navigate("/login");
    };

    return (
        <div className="header">
            <Link to="/" className="header_logo">로고</Link>
            <div className="header_left">
                <nav className="header_nav">
                    <Link to="/main_list">메인리스트</Link>
                    <Link to="/my_list">내리스트</Link>
                    <Link to="/nav3">카테고리_여분</Link>
                </nav>
            </div>
            <div className="header_right">
                {isLogIn ? (
                    <button onClick={handleLogout} className="logout">로그아웃</button>
                ) : (
                    <button onClick={handleLogin} className="login">로그인</button>
                )}
            </div>
        </div>
    );
};

export default Header;
