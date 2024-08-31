import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { qtyItems } = useCartContext();
    return <div className="cartwidget">🛒{qtyItems}</div>
};

export default CartWidget;