import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <div>
            <Link to="/products"/>
                <h1>Product App</h1>
            <Link to="/products-create">Create Product</Link>
        </div>
    )
}