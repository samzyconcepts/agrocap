import HeroImg from "../../../assets/image/heroImg.png";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
				<div className="container">
					<h1 className="l-heading">
						AgroCap <br />
						Token
					</h1>

					<div className="content">
						<p>
							Powered by the latest Blockchain Technology, we are
							creating fractionalized ownership of real world
							assets
						</p>
						<p>
							AgroCap token is a Bep 20 security token, created by
							AgroCap Global
						</p>
					</div>
					<div className="center">
						<div className="image">
							<img
								src={HeroImg}
								alt="agricultural product"
							/>
						</div>
						<div className="imgContent">
							<h3>[1 BUSD &#61; 1 AGCT]</h3>
							<a href="#signUp" className="btn btn-primary">Buy Token</a>
						</div>
					</div>
				</div>
			</section>
    );
};

export default Hero;
