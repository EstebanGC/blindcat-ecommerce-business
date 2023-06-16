export function BuyCard({buy}) {
    return (
        <div> 
            <h1>Total Price: {buy.totalPrice}</h1>
            <h3>Quantity: {buy.quantity}</h3>
            <h3>Date: {buy.date}</h3>
            <h3>ID Type: {buy.clientIdType}</h3>
            <h3>Client Name: {buy.clientName}</h3>
            <h3>Product Code: {buy.product}</h3>
            <hr/>
        </div>
    )
}