import InputField from "../../../components/InputField/InputField";
import SignUpHeader from "../../../components/SignUpHeader/SignUpHeader";

const style = {
    marginTop: "2rem",
    padding: "0 5rem",
};

const LinkWallet = ({ handleStep, handleChange, values }) => {
    return (
        <form id="signup">
            <SignUpHeader
                heading="Link your Wallet"
                subheading="Link your BUSD ERC 20 Wallet address to your AgroCap (AGCT)"
            />

            <InputField
                label="Email Address"
                value={values.email}
                disabled={true}
            />
            <InputField
                label="Link Address"
                placeholder="BUSD ERC 20 Wallet Address"
                name="walletAddress"
                type="text"
            />
            <input
                type="submit"
                className="btn btn-primary"
                value="Link your wallet"
                onClick={handleStep}
            />
            <input
                type="button"
                onClick={handleStep}
                className="btn btn-tertiary"
                value="Skip"
            />

            <p className="sub-heading" style={style}>
                This linked wallet address serves as AGCT wallet address.
                Payment must be made with the linked wallet address{" "}
            </p>
        </form>
    );
};
export default LinkWallet;
