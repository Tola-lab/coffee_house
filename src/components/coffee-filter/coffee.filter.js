import './coffee-filter.scss';

const CoffeeFilter = () => {
    return (
        <div className="coffee_filter">
            <p>Lookiing for</p>
            <input type="text"
                className="search_input"
                placeholder="start typing here..."
                />
            <p>Or filter</p>
            <div className='btn_group'>
                <button type="button"
                        className="btn btn-light">
                        Brazil
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        Kenya
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        Columbia
                </button>
            </div>
        </div>
    );
};

export default CoffeeFilter;
