import "./Benefit.css";

const Benefit = () => {
    return (
        <section id="benefit">
            <div className="container">
                <h1 className="l-heading">Benefit of Buying AGCT</h1>
                <div className="content">
                    <div className="benefits">
                        <p>
                            AgroCap Token is a secure way to earn regular
                            passive income. AGCT holder can withdraw their daily
                            interest anytime; this is paid into their wallet.
                        </p>
                        <p>
                            The Token price does not fluctuate. Its price is
                            pegged to BUSD, at a ratio of 1:1; therefore token
                            holders can not lose money due to price fluctuation.
                        </p>
                        <p>
                            Making money is easy with agrocap tokens because it
                            is hold and earn stable security tokens, the token
                            has the potential of appreciating by 20% to 40% per
                            annum.
                        </p>
                        <p>
                            Holders earn up to 10% commission on net AGCT
                            purchase of their referees, 7% commission on direct
                            referees, and 3% commission on their indirect
                            referees.
                        </p>
                    </div>
                    <img
                        src="../../assets/image/buyingImg.png"
                        alt="agroimage"
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefit;
