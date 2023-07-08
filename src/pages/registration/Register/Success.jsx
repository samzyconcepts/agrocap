import { Link } from "react-router-dom";
import SignUpHeader from "../../../components/SignUpHeader/SignUpHeader";



const Success = () => {
    return (
        <form id="signup">
            <SignUpHeader
                heading="Activate your account"
                subheading="Your account has been created successful, in order to continue you must activate the account by clicking on the confirmation link sent to your email"
                mailSuccess={true}
            />

            <Link to="/login" className="btn btn-primary">
                Go to Dashboard
            </Link>
            <p className="sub-heading" style={{marginTop:"1rem"}}>
                Didn’t receive the mail? Click <a href="#link">here</a> to
                resend the mail
            </p>
        </form>
    );
};
export default Success;
