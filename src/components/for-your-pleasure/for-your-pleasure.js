import AppMenu from '../app-menu/app-menu';
import './for-your-pleasure.scss';

const ForYourPleasure = () => {
    return (
        <div className="for-your-pleasure">
            <div className="for-your-pleasure__header">
                <AppMenu/>
            </div>
            <h2 className="for-your-pleasure__title">For your pleasure</h2>
        </div>
    )
}; 

export default ForYourPleasure;