import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";

export function Login() {
    const { onLoginSubmit } = useContext(AuthContext);
    const loginFormKeys = {
        Email: "email",
        Password: "password"
    }

    const { values, changeValues, onSubmitClick } = useForm({
        [loginFormKeys.Email]: "",
        [loginFormKeys.Password]: ""
    }, onLoginSubmit)

    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmitClick}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Sokka@gmail.com" 
                        name={loginFormKeys.Email}
                        value={values[loginFormKeys.Email]}
                        onChange={changeValues}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id={loginFormKeys.Password}
                        value={values[loginFormKeys.Password]}
                        onChange={changeValues}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to={"/register"}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}