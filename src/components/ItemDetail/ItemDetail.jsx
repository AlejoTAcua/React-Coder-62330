import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useCartContext } from "../../context/CartContext.jsx";

const ItemDetail = ({product}) => {
    const {title, description, price, image, id, stock} = product;

    const { addToCart } = useCartContext();
    const handleOnBuy = (cantidad) => {
        const item = {title, description, price, image, id, stock}
        addToCart( item, cantidad ); 
    }

    return(
        <>
            <div className="tarjeta">
                <div className="titleProduct">{title}</div>
                <img src={image} alt="imagen" />
                <div className="textProduct">{description}</div>
                <div>${price}</div>
                <div>{id}</div>
                <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy}/>
            </div>
        </>
    )
};

export default ItemDetail;