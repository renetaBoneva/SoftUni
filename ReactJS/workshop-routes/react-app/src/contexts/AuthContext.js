import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export function AuthProvider({
    children
}) {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    async function onRegisterSubmit(data) {
        if (data.confirmPassword !== data.password) {
            return console.log("Password mismatch!");
        }
        const { confirmPassword, ...postData } = data;

        try {
            const res = await authService.postRegister(postData);
            setAuth(res);
            navigate('/catalog');
        } catch (err) {
            console.log(err.message);
        }
    }

    async function onLoginSubmit(data) {
        try {
            const res = await authService.postLogin(data);
            setAuth(res);
            navigate('/catalog');
        } catch (err) {
            console.log(err.message);
        }
    }

    async function onLogout() {
        return setAuth({});
    }

    const context = {
        onLoginSubmit,
        onLogout,
        onRegisterSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    }
    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
