import about from "../../assets/image/aboutImg.png"
import "./About.css"
const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h1 className="l-heading">About AGCT</h1>
                <div>
                    <img src={about} alt="about" />
                </div>
                <div className="content">
                    <p>
                        A company is seeking to transform the outdated and
                        exclusionary agro financial infrastructure by utilizing
                        blockchain technology. They aim to tokenize, safeguard,
                        and finance agricultural ventures, creating a system
                        that integrates traditional markets with the digital
                        asset ecosystem. Through their blockchain-based
                        infrastructure, they aim to make agriculture investment
                        accessible to all, allowing individuals to build agro
                        asset portfolios with as little as 10 BUSD and earn
                        passive income.
                    </p>
                    <p>
                        The introduction of AgroCap Token presents an
                        opportunity for individuals to gain fractional ownership
                        of real-world agro assets. By leveraging blockchain
                        technology, this token opens up investment possibilities
                        that were once limited to institutional and high net
                        worth investors. The community is encouraged to
                        participate, breaking down previous barriers and
                        enabling regular passive income from agriculture and
                        agro-allied ventures.
                    </p>
                    <p>
                        AgroCap Token, a Bep-20 asset backed security token, is
                        pegged to BUSD at a 1:1 ratio. Token holders benefit
                        from earning daily interest in BUSD by holding AGCT in
                        their wallets. This token offers protection against
                        impermanent loss and promises a significant annual
                        interest rate of 20% - 40%. Investors are encouraged to
                        buy AgroCap Token today to begin earning attractive
                        returns on their digital assets.
                    </p>
                    <div className="cta">
                        <h3>[1 BUSD &#61; 1 AGCT]</h3>
                        <a href="#buy" className="btn btn-primary">
                            Buy Token
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
