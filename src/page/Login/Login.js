import "./Login.css";
import { useState } from "react";
import useLogin from "../../hook/useLogin.js";
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const { setIsLogIn } = useAuth(); // 로그인 상태 가져오기
    const { handleLogin, loading, error } = useLogin(setIsLogIn);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id || !pw) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
        } else {
            handleLogin(id, pw);
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <button type="submit" disabled={loading}>로그인</button>
            </form>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default Login;
