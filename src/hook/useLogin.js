import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = (setIsLogIn) => { // setIsLogIn을 파라미터로 추가
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (id, pw) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get("/api/login", { params: { id, pw } });
            const data = response.data;

            if (data.success) {
                localStorage.setItem('token', data.token);
                setIsLogIn(true);
                alert(`${data.user.name}님 환영합니다.`);
                navigate("/");
            } else {
                alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            }
        } catch (err) {
            setError(err);
            alert("로그인 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading, error };
};

export default useLogin;
