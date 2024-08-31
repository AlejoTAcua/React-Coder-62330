import { useCartContext } from "../../context/CartContext"
import "./Cart.css"

const Cart = () => {
    const { cart, total, removeItem, clearCart } = useCartContext();

    const handleRemoveItem = ( id, price, qty ) => {
        removeItem(id, price, qty);
    };

    const handleClearCart = () => {
        clearCart();
    };


    return(
        <div className="container">
            <div className="first">
                <div>Title</div>
                <div>Price</div>
                <div>Qty</div>
                <div>Actions</div>
            </div>
            <div className="products">
                {cart.map(({id, title, price, qty }, index) => {
                    return (
                        <div className="product" key={index}>
                            <div>{title}</div>
                            <div>$ {price}</div>
                            <div>{qty}</div>
                            <div><button onCdivck={() => handleRemoveItem(id, price, qty)}>Remove Item</button></div>
                        </div>
                    )}
                )}
            </div>
            <div className="price">
                <div>Total Price</div>
                <div>$ {total}</div>
            </div>
            <button onCdivck={handleClearCart}>Clear Cart</button>
        </div>
    )


}

export default Cart