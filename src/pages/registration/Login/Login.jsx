import { useState } from "react";
import { Link } from "react-router-dom";
import FormImg from "../../../components/FormImg/FormImg";
import InputField from "../../../components/InputField/InputField";
import ForgetPassword from "./ForgetPassword";

import logo from "../../../assets/image/logo-black.png";
import "./Login.css";

const Login = () => {
    const [displayForgetPassword, setDisplayForgetPassword] = useState(false);
    const toggleForgetPassword = () => {
        setDisplayForgetPassword(true);
    };

    return (
        <section className="form">
            <div className="container">
                <FormImg />

                {displayForgetPassword ? (
                    <ForgetPassword />
                ) : (
                    <form id="login">
                        <div className="head">
                            <img
                                src={logo}
                                className="logo"
                                alt="AgroCap logo"
                            />
                            <h1 className="l-heading">
                                Welcome back to AgroCap
                            </h1>
                            <p className="sub-heading">
                                Log in to your account with few steps
                            </p>
                        </div>

                        <InputField
                            label="Email Address"
                            placeholder="email@gmail.com"
                            name="email"
                            type="email"
                        />
                        <InputField
                            label="Password"
                            placeholder="***************"
                            name="password"
                            type="password"
                        />

                        <p className="forget" onClick={toggleForgetPassword}>
                            Forget password?
                        </p>

                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Log in"
                        />

                        <p className="sub-heading signup-btn">
                            New here?
                            <Link to="/register">&nbsp;Sign up</Link>
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Login;
