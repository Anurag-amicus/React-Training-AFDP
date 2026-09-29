import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-eyebrow">
                    ONLINE EXPRESS
                </p>

                <h1>
                    FIND THE RIGHT PRODUCTS
                </h1>

                <p className="hero-description">
                    Discover quality products designed to fit
                    your everyday needs.
                </p>

                <Button variant="primary">
                    Shop Now
                </Button>

            </div>

        </section>
    );
}

export default Hero;