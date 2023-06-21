export function BuyCard({buy}) {
    return (
        <div> 
            <h3>Total Price: {buy.totalPrice}</h3>
            <p>Quantity: {buy.quantity}</p>
            <p>Date: {buy.date}</p>
            <p>ID Type: {buy.clientIdType}</p>
            <p>Client Name: {buy.clientName}</p>
            <p>Product Code: {buy.product}</p>
            <hr/>
        </div>
    )
}