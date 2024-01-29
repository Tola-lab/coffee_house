import { Link } from 'react-router-dom';
import coffee from '../../resources/img/aromistico.jpeg';
import {useState, useEffect} from 'react';
import {useHttp} from '../../hooks/http.hook';
import ErrorMessage from '../error-message/error-message';
import './coffee-cards.scss';

const CoffeeCards = () => {

    const [coffeeCards, setCoffeeCards] = useState([]);
    const [error, setError] = useState(false);
    const {request} = useHttp();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        request("http://localhost:3001/coffee")
            .then(data => setCoffeeCards(data.map(_transformCards)))
            .catch(onError)
            // eslint-disable-next-line
    };

    const onError = () => {
        setError(true);
    };

    const _transformCards = (card) => {
        return { 
            name: card.name, 
            country: card.country, 
            price: card.price,
            img: card.img
        }
    };

    const renderItems = (arr) => {
        const cards = arr.map((item) => {
            return (
                    <Link to={`/about`} 
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
    const content = !error ? cards : null;

    return (
        <div className="conteiner">
            {errorMessage}
            {content}
        </div>
    )
};

export default CoffeeCards;