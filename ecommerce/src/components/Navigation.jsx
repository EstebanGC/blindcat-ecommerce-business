import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div>
            <Link to="/products">
                <h1>Product App</h1>
            </Link>
            <Link to="/products-create">Create Product</Link>    
        </div>
    )
}



export function BuyNavigation() {
    return (
        <div>
            <Link to="/buys">
                <h1>Buys App</h1>
            </Link>
            <Link to="/buys-create">Create Buy</Link>
        </div>
    )
}