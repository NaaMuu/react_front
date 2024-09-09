import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { login } = useAuth();

    const handleLogin = async (id, pw) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get("/api/login", {
                params: { id, pw },
            });
            const data = response.data;
            if (data.success) {
                login(data.user);
                alert(`${data.user.name}님 환영합니다.`);
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
