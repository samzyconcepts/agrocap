import logo from "../../../assets/image/logo-black.png";
import InputField from "../../../components/InputField/InputField";

const Verification = () => {
    return (
        <form id="auth">
            <div className="head">
                <img src={logo} className="logo" alt="AgroCap logo" />
                <h1 className="l-heading">2-Factor Verification</h1>
                <p className="sub-heading">
                    Enter the verification code sent to your mail ending in
                    E******@gmail.com
                </p>
            </div>
            <InputField
                label="Enter 2-Factor Code"
                placeholder=""
                name="number"
                type="number"
            />

            <input type="submit" className="btn btn-primary" value="Verify" />
        </form>
    );
};
export default Verification;
