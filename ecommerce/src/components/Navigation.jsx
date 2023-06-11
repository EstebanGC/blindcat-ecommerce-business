import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <div>
            <Link to="/tasks"/>
                <h1>Product App</h1>
            <Link to="/products-create">Create Product</Link>
        </div>
    )
}