import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="" className="header_logo">로고</Link>
            <div className="header_left">
                <nav className="header_nav">
                    <Link to="main_list">메인리스트</Link>
                    <Link to="my_list">내리스트</Link>
                    <Link to="nav3">카테고리_여분</Link>
                </nav>
            </div>
            <div className="header_right">
                <Link to="login" className="login">로그인</Link>
            </div>
        </div>
    );
}

export default Header;
