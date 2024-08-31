import { useCartContext } from "../../context/CartContext"

const Cart = () => {
    const { cart, total, removeItem, clearCart } = useCartContext();

    const handleRemoveItem = ( id, price, qty ) => {
        removeItem(id, price, qty);
    };

    const handleClearCart = () => {
        clearCart();
    };


    return(
        <>
            <div>
                <li>id</li>
                <li>title</li>
                <li>price</li>
                <li>qty</li>
                <li>actions</li>
            </div>
            <div>
                {cart.map(({id, title, price, qty }, index) => {
                    return (
                        <ul key={index}>
                            <li>{id}</li>
                            <li>{title}</li>
                            <li>{price}</li>
                            <li>{qty}</li>
                            <li><button onClick={() => handleRemoveItem(id, price, qty)}>Remove Item</button></li>
                        </ul>
                    )}
                )}
            </div>
            <div>
                <div>Total Price</div>
                <div>$ {total}</div>
            </div>
            <button onClick={handleClearCart}>Clear Cart</button>
        </>
    )


}

export default Cart