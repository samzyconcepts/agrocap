import { useState } from "react";
import logo from "../../../assets/image/logo-black.png";
import InputField from "../../../components/InputField/InputField";
import FormImg from "../../../components/FormImg/FormImg";
import Verification from "./Verification";

const ForgetPassword = () => {
    const [currentVerification, setCurrentVerification] = useState("forgotten");
    const [email, setEmail] = useState("");

    const toggleVerification = (authName) => {
        setCurrentVerification(authName);
    };

    return (
        <section className="form">
            <div className="container">
                <FormImg />
                {currentVerification === "forgotten" ? (
                    <form id="forgotten" onSubmit={toggleVerification}>
                        <div className="head">
                            <img
                                src={logo}
                                className="logo"
                                alt="AgroCap logo"
                            />
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
                            handleChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Password Reset"
                        />
                    </form>
                ) : (
                    <Verification />
                )}
            </div>
        </section>
    );
};
export default ForgetPassword;
