import { Link } from "react-router-dom";
import InputField from "../../../components/InputField/InputField";
import SignUpHeader from "../../../components/SignUpHeader/SignUpHeader";

const FormUserDetails = ({ handleStep, handleChange, values }) => {

    return (
        <form id="signup">
            <SignUpHeader
                heading="Welcome to AgroCap"
                subheading="Sign up by entering the information below"
            />

            <InputField
                label="Email Address"
                placeholder="email@gmail.com"
                name="email"
                type="email"
                handleChange={handleChange('email')}
                value={values.email}
            />
            <InputField
                label="Password"
                placeholder="***************"
                name="password"
                type="password"
                handleChange={handleChange('password')}
                value={values.password}
            />
            <InputField
                label="Confirm Password"
                placeholder="***************"
                name="confirmpassword"
                type="password"
                handleChange={handleChange('confirmPassword')}
                value={values.confirmPassword}
            />
            <InputField
                label="Referer Code"
                placeholder="AG67577899543222256"
                name="text"
                type="text"
                handleChange={handleChange('referrerCode')}
                value={values.referrerCode}
            />

            <div className="checkbox">
                <input type="checkbox" name="agree" id="agree" />
                <label htmlFor="agree">
                    I agree to the <span>Terms and Conditions</span>
                </label>
            </div>

            <input
                type="button"
                className="btn btn-primary"
                value="Create an Account"
                onClick={handleStep}
            />

            <p className="sub-heading login-btn">
                Already have an account?
                <Link to="/login"> Login</Link>
            </p>
        </form>
    );
};
export default FormUserDetails;
