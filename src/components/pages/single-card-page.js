// import { useParams, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useCoffeeService from '../../services/coffee-service';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';

import beans from '../../resources/img/beans_logo_black.svg';
import coffee from '../../resources/img/coffee.jpg';
import './single-card-page.scss';

const SingleCardPage = () => {

    const [card, setCard] = useState(null);
    const {id} = useParams();
    const {getCard, error, loading} = useCoffeeService();

    useEffect(() => {
        onRequest();
    }, [id]);


    const onRequest = () => {
        getCard(id)
            .then(res => (setCard(res)))
            // eslint-disable-next-line
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !card) ? <View card={card}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
};

const View = ({card}) => {
    const {country, description, price} = card;
    return (
        <div className="about_it">
            <div className="about_it-wrapper">
            <img src={coffee} alt="coffee beans" />
                <div className="about_it-wrapper_text">
                    <h2 className="about_it-title">About it</h2>
                    <img src={beans} alt="beans" />
                    <div className="about_it-subtitle"><span>Country:</span> <b></b>{country}</div>
                    <div className="about_it-descr">
                    <b>Description:</b> {description}
                    </div>
                    <div className="about_it-price">
                        <div className="about_it-price-title">Price: </div>
                        <div className="about_it-price-count">{price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default SingleCardPage;
