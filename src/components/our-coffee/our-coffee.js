import AppMenu from '../app-menu/app-menu';
import './our-coffee.scss';

const OurCoffee = () => {
    return (
        <div className="our-coffee">
            <div className="our-coffee__header">
                <AppMenu/>
            </div>
            <h2 className="our-coffee__title">Our Coffee</h2>
        </div>
    )
}; 

export default OurCoffee;