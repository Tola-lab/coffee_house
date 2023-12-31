import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'margin-top': '250px'}}>This page is not found</p>
            <Link 
                style ={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '18px', 'marginTop': '30px', 'color': '#9f0013'}}
                to ="/">Back to main page</Link>
        </div>
    );
};

export default Page404;