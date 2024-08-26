import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <a href="Home" className="header_logo">로고</a>
            <div className="header_left">
                <nav className="header_nav">
                    <a href="nav1">카테고리1</a>
                    <a href="nav2">카테고리2</a>
                    <a href="nav3">카테고리3</a>
                </nav>
            </div>
            <div className="header_right">
                <a href="login" className="login">로그인</a>
            </div>
        </div>
    );
}

export default Header;
