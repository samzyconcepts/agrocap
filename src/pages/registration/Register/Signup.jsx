import React from "react";
import { Link } from "react-router-dom";
import FormImg from "../../../components/FormImg/FormImg";
import InputField from "../../../components/InputField/InputField";

import logo from "../../../assets/image/logo-black.png";
import "./Signup.css";

const Signup = () => {
    return (
        <section className="form">
            <div className="container">
                <FormImg />
                <form id="signup">
                    <div className="head">
                        <img src={logo} className="logo" alt="AgroCap logo" />
                        <h1 className="l-heading">Welcome to AgroCap</h1>
                        <p className="sub-heading">
                            Sign up by entering information below
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
                    <InputField
                        label="Confirm Password"
                        placeholder="***************"
                        name="confirmpassword"
                        type="password"
                    />
                    <InputField
                        label="Referer Code"
                        placeholder="AG67577899543222256"
                        name="text"
                        type="text"
                    />

                    <div className="checkbox">
                        <input type="checkbox" name="agree" id="agree" />
                        <label htmlFor="agree">
                            I agree to the <span>Terms and Conditions</span>
                        </label>
                    </div>

                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Create an Account"
                    />

                    <p className="sub-heading login-btn">
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Signup;
