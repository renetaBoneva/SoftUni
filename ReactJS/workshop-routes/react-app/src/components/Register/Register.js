import { useContext } from "react";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const registerFormKeys = {
        Email: "email",
        Pass: "password",
        RePass: "confirmPassword"
    }
    const { values, changeValues, onSubmitClick } = useForm({
        [registerFormKeys.Email]: "",
        [registerFormKeys.Pass]: "",
        [registerFormKeys.RePass]: "",
    }, onRegisterSubmit)
    
    return (
        <section id="register-page" className="content auth">
            <form id="register" method="POST" onSubmit={onSubmitClick}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={registerFormKeys.Email}
                        placeholder="maria@email.com"
                        value={values[registerFormKeys.Email]}
                        onChange={changeValues}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name={registerFormKeys.Pass}
                        id="register-password"
                        value={values[registerFormKeys.Pass]}
                        onChange={changeValues}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name={registerFormKeys.RePass}
                        id="confirm-password"
                        value={values[registerFormKeys.RePass]}
                        onChange={changeValues}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to={"/login"}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}