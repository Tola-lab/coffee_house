import substrate from '../../resources/img/rectangle.png';
import solimo from '../../resources/img/solimo.jpeg';
import presto from '../../resources/img/presto.jpeg';
import aromistico from '../../resources/img/aromistico.jpeg';

import './our-best.scss';

const OurBest = () => {
    return (
            <div className="our__best">
                <h2 className="our__best-title">Our best</h2>
                <div className="wrapper">
                    <div className="wrapper__items">
                        <div className="wrapper__item">
                            <img src={substrate} alt="substrate" />
                            <img src={solimo} alt="solimo coffee" className="wrapper__item-img"/>
                            <div className="wrapper__item-sub">Solimo Coffee Beans 2 kg</div>
                            <div className="wrapper__item-price">10.73$</div>
                        </div>
                        <div className="wrapper__item">
                            <img src={substrate} alt="substrate" />
                            <img src={presto} alt="presto coffee" className="wrapper__item-img"/>
                            <div className="wrapper__item-sub">Presto Coffee Beans 1 kg</div>
                            <div className="wrapper__item-price">15.99$</div>
                        </div>
                        <div className="wrapper__item">
                            <img src={substrate} alt="substrate" />
                            <img src={aromistico} alt="aromistico coffee" className="wrapper__item-img"/>
                            <div className="wrapper__item-sub">AROMISTICO Coffee 1 kg</div>
                            <div className="wrapper__item-price">6.99$</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default OurBest;