import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(); // 로그인 상태를 관리할 컨텍스트를 생성

export const AuthProvider = ({ children }) => { // 로그인 상태를 제공하고 관리하는 컴포넌트
    const [isLogIn, setIsLogIn] = useState(false); // 로그인 상태를 관리하는 useState 훅

    useEffect(() => { // 컴포넌트가 처음 렌더링될 때, 로컬 스토리지에서 토큰을 확인하여 로그인 상태를 설정
        const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기
        setIsLogIn(!!token); // 토큰이 있으면 true, 없으면 false로 로그인 상태 설정
    }, []); // 빈 배열을 의존성으로 하여, 처음 마운트될 때만 실행

    return ( // 로그인 상태와 상태 변경 함수를 하위 컴포넌트에게 제공
        <AuthContext.Provider value={{ isLogIn, setIsLogIn }}>
            {children} {/* 자식 컴포넌트들이 이 컨텍스트에 접근 가능 */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => { // AuthContext를 편리하게 사용할 수 있도록 만든 커스텀 훅
    return useContext(AuthContext);  // useContext를 사용해 AuthContext의 값에 접근
};
