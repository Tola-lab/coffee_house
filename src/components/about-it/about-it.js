import beans from '../../resources/img/beans_logo_black.svg';
import coffee from '../../resources/img/coffee.jpg';
import './about-it.scss';

const AboutIt = () => {
    return (
        <div className="about_it">
            <div className="about_it-wrapper">
            <img src={coffee} alt="coffee beans" />
                <div className="about_it-wrapper_text">
                    <h2 className="about_it-title">About it</h2>
                    <img src={beans} alt="beans" />
                    <div className="about_it-subtitle"><b>Country:</b> Brasil</div>
                    <div className="about_it-descr">
                    <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="about_it-price">
                        <div className="about_it-price-title">Price: </div>
                        <div className="about_it-price-count">16.99$</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutIt;

