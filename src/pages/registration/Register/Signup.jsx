import { useState } from "react";
import FormImg from "../../../components/FormImg/FormImg";
import FormUserDetails from "./FormUserDetails";
import LinkWallet from "./LinkWallet";
import "./Signup.css";
import Success from "./Success";

const Signup = () => {
    const [step, setStep] = useState(1);
    const [details, setDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        referrerCode: "",
        linkAddress: "",
    });

    const { email, password, confirmPassword, referrerCode, linkAddress } =
        details;

    const values = {
        email,
        password,
        confirmPassword,
        referrerCode,
        linkAddress,
    };

    // Proceed to next step
    const handleStep = () => {
        setStep((step) => step + 1);
        console.log(details);
    };

    // Handle changes in input and save them in the state
    const handleChange = (input) => (e) => {
        setDetails({ ...details, [input]: e.target.value });
    };

    return (
        <section className="form">
            <div className="container">
                <FormImg />

                {(() => {
                    switch (step) {
                        case 1:
                            return (
                                <FormUserDetails
                                    handleChange={handleChange}
                                    handleStep={handleStep}
                                    values={values}
                                />
                            );
                        case 2:
                            return (
                                <LinkWallet
                                    handleChange={handleChange}
                                    handleStep={handleStep}
                                    values={values}
                                />
                            );
                        case 3:
                            return <Success />;
                        default:
                            return null;
                    }
                })()}
            </div>
        </section>
    );
};

export default Signup;
