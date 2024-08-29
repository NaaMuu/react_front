import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id || !pw) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
        }
        else {
            console.log("폼 제출 완료 : ", id, pw);
        }
    }

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
                    type="text"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <button>
                    로그인
                </button>
            </form>
        </div>
    )
}

export default Login;
