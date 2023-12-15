import OurCoffee from '../our-coffee/our-coffee';
import AboutOurBeans from '../about-our-beans/about-our-beans';
import CoffeeFilter from '../coffee-filter/coffee.filter';
import CoffeeCards from '../coffee-cards/coffee-cards';
import Footer from '../footer/footer';

const OurCoffeePage = () => {
    return (
        <>
            <OurCoffee/>
            <AboutOurBeans/>
            <CoffeeFilter/>
            <CoffeeCards/>
            <Footer/>
        </>
    )
};

export default OurCoffeePage;