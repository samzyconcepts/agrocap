import { useState } from "react";
import logo from "../../../assets/image/logo-black.png";
import InputField from "../../../components/InputField/InputField";
import Verification from "./Verification"

const ForgetPassword = () => {
    const [currentVerification, setCurrentVerification] = useState("forgotten");

    const toggleVerification = (authName)=>{
      setCurrentVerification(authName)
    }

    return (
      currentVerification === 'forgotten' ?
        <form id="forgotten" onSubmit={toggleVerification}>
            <div className="head">
                <img src={logo} className="logo" alt="AgroCap logo" />
                <h1 className="l-heading">Forget Password</h1>
                <p className="sub-heading">
                    Enter your details to find your account
                </p>
            </div>
            <InputField
                label="Email Address"
                placeholder="email@gmailexample.com"
                name="email"
                type="email"
            />

            <InputField
                label="Invitation Code"
                placeholder="AG67577899543222256"
                name="text"
                type="text"
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

            <input
                type="submit"
                className="btn btn-primary"
                value="Password Reset"
            />
        </form>

        : <Verification />
    );
};
export default ForgetPassword;
