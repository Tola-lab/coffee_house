import error from '../../resources/img/error.png';

const ErrorMessage = () => {
    return (
        <div>
            <img style={{ display: 'block', width: '150px', height: '150px', objectFit: 'contain', margin: '0 auto', marginTop: '50px'}}  src={error} alt="error"/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>ERROR</p>
        </div>
    )
};

export default ErrorMessage;