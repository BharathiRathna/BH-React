import MapImage from '../assets/images/map.png'
import AboutHome from '../components/AboutHome'
import FeatureCard from '../components/FeatureCard'
import FeatureCarousel from '../components/FeatureCarousel'
import Location from '../components/Location'
import HeroHeader from '../components/HeroHeader'

function HomePage() {
    return (
         <div className='bg-no-repeat min-h-screen bg-contain bg-right' style={{ backgroundImage: `url(${MapImage})` }}>
            <HeroHeader />
            <FeatureCarousel />
            <FeatureCard />
            <AboutHome />
            <Location />
        </div>
    );
}

export default HomePage;