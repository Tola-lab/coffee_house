import { Link } from 'react-router-dom';
import coffee from '../../resources/img/aromistico.jpeg';
import {useState, useEffect} from 'react';
import useCoffeeService from '../../services/coffee-service';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';
import './coffee-cards.scss';

const CoffeeCards = () => {

    const [coffeeCards, setCoffeeCards] = useState([]);
    const {getAllCards, error, loading} = useCoffeeService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getAllCards()
            .then(res => setCoffeeCards(res))
            // eslint-disable-next-line
    };

    const renderItems = (arr) => {
        const cards = arr.map(item => {
            return (
                    <Link to={`/coffee/${item.id}`} 
                          className="coffee_card" 
                          key={item.id}>
                            <div className="coffee_card-wrapper">
                                <img src={coffee} alt={`coffee beans - ${item.name}`}/>
                                <div className="coffee_card-title">{item.name}</div>
                                <div className="coffee_card-descr">{item.country}</div>
                                <div className="coffee_card-price">{item.price}</div>
                            </div>
                    </Link>
            )
        });
        return (
            <li className="coffee_cards">
                {cards}
            </li>
        )
    };
 
    const cards = renderItems(coffeeCards);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !error ? cards : null;


    return (
        <div className="conteiner">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
    
};

export default CoffeeCards;