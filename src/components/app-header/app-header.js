import beans from '../../resources/img/beans_logo.svg';
import AppMenu from '../app-menu/app-menu';
import './app-header.scss';

const AppHeader = () => {
    return (
        <header className="header">
            <div className="app__header">
                <AppMenu/>
            </div>
            <div className="app__info">
                <h1 className="app__title">Everything You Love About Coffee</h1>
                <img src={beans} alt="beans" />
                <div className="app__descr">
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                </div>
            </div>
            <button className="button__main">More</button>
        </header> 
    );
}

export default AppHeader;