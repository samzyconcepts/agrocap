import logo from "../../assets/image/logo-black.png";
import successIcon from "../../assets/image/mail-success.svg"

const SignUpHeader = ({ heading, subheading, mailSuccess }) => {
    return (
        <div className="head">
            <img src={logo} className="logo" alt="AgroCap logo" />
            {
                mailSuccess ? <img src={successIcon} className="logo" alt="AgroCap logo" /> : ""
            }
            <h1 className="l-heading">{heading}</h1>
            <p className="sub-heading">{subheading}</p>
        </div>
    );
};
export default SignUpHeader;
