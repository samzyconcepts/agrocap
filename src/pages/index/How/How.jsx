import './How.css'

const How = () => {
    return (
        <section id="howto">
            <div className="container">
                <h1 className="l-heading">
                    How<span className="howtobg"></span>to buy AgroCap Token
                </h1>

                <div className="content">
                    <div className="card">
                        <div className="img">
                            <i className="bx bxs-user"></i>
                        </div>
                        <p>Sign Up on The Platform</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <i className="bx bxs-user"></i>
                        </div>
                        <p>
                            Connects your BUSD BEP20 wallets to the your
                            dashboard
                        </p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <i className="bx bxs-user"></i>
                        </div>
                        <p>
                            Enter the number of AGCTs you would like to obtain.
                            <br />
                            Note: 1AGCT&#61;1BUSD
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default How;
