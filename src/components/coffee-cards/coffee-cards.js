import { Link } from 'react-router-dom';
import coffee from '../../resources/img/aromistico.jpeg';
import './coffee-cards.scss';

const CoffeeCards = () => {
    return (
        <div className="conteiner">
            <li className="coffee_cards">
                <Link to="/about" className="coffee_card">
                    <div className="coffee_card-wrapper">
                        <img src={coffee} alt="coffee beans"/>
                        <div className="coffee_card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="coffee_card-descr">Brazil</div>
                        <div className="coffee_card-price">6.99$</div>
                    </div>
                </Link>
                <Link to="/about" className="coffee_card">
                    <div className="coffee_card-wrapper">
                        <img src={coffee} alt="coffee beans"/>
                        <div className="coffee_card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="coffee_card-descr">Kenya</div>
                        <div className="coffee_card-price">6.99$</div>
                    </div>
                </Link>
                <Link to="/about" className="coffee_card">
                    <div className="coffee_card-wrapper">
                        <img src={coffee} alt="coffee beans"/>
                        <div className="coffee_card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="coffee_card-descr">Columbia</div>
                        <div className="coffee_card-price">6.99$</div>
                    </div>
                </Link>
                <Link to="/about" className="coffee_card">
                    <div className="coffee_card-wrapper">
                        <img src={coffee} alt="coffee beans"/>
                        <div className="coffee_card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="coffee_card-descr">Brazil</div>
                        <div className="coffee_card-price">6.99$</div>
                    </div>
                </Link>
                <Link to="/about" className="coffee_card">
                    <div className="coffee_card-wrapper">
                        <img src={coffee} alt="coffee beans"/>
                        <div className="coffee_card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="coffee_card-descr">Brazil</div>
                        <div className="coffee_card-price">6.99$</div>
                    </div>
                </Link>
                <Link to="/about" className="coffee_card">
                    <div className="coffee_card-wrapper">
                        <img src={coffee} alt="coffee beans"/>
                        <div className="coffee_card-title">AROMISTICO Coffee 1 kg</div>
                        <div className="coffee_card-descr">Brazil</div>
                        <div className="coffee_card-price">6.99$</div>
                    </div>
                </Link>
            </li>
        </div>
    )
};

export default CoffeeCards;