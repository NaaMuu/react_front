import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        alert("로그아웃 되었습니다.");
        navigate("/login");
    };

    const handleClickUnLogin = (e, path) => {
        if (!isLoggedIn) {
            e.preventDefault(); // 기본 링크 클릭 동작 방지
            alert("로그인이 필요합니다.");
            navigate("/login");
        } else {
            navigate(path); // 로그인 상태라면 해당 경로로 이동
        }
    };

    return (
        <div className="header">
            <Link to="/" className="header_logo">로고</Link>
            <div className="header_left">
                <nav className="header_nav">
                    <Link to="/main_list" onClick={(e) => handleClickUnLogin(e, "/main_list")}>메인리스트</Link>
                    <Link to="/my_list" onClick={(e) => handleClickUnLogin(e, "/my_list")}>내리스트</Link>
                    <Link to="/nav3" onClick={(e) => handleClickUnLogin(e, "/nav3")}>카테고리_여분</Link>
                </nav>
            </div>
            <div className="header_right">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="logout">로그아웃</button>
                ) : (
                    <Link to="/login" className="login">로그인</Link>
                )}
            </div>
        </div>
    );
}

export default Header;
