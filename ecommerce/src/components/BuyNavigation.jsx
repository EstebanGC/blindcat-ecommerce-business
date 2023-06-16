import {Link} from 'react-router-dom';

export function BuyNavigation() {
    return (
        <div>
            <Link to="/buys"/>
                <h1>Buy App</h1>
            <Link to="/buys-create">Create Buy</Link>
        </div>
    )
}