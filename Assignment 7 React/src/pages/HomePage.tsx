import './HomePage.css';

import CtaGrid from '../components/CtaGrid';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCarousel from '../components/FeaturedCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div className="home-page">

            <Header />

            <main>

                <Hero />

                <CtaGrid />

                <FeaturedCarousel />

                <CategoryGrid />

            </main>

            <Footer />

        </div>
    );
}

export default HomePage;