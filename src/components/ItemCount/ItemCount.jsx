import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ stock, initial, handleOnBuy }) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(initial);
    const [itemAdded, setItemAdded] = useState(false);

    const handleClick = (op) => {
    op === "-" ? clickMenos() : clickMas();
    };

    const clickMenos = () => {
        if (qty == 1 ){
            alert("El valor no puede ser menor a 1");
            return;
        };
        setQty(qty - 1);
    };

    const clickMas = () => {
        if (qty == stock ){
            alert("No hay más stock");
            return;
        };
        setQty(qty +  1);
    };

    const handleAddToCart = () => {
        handleOnBuy(qty)
        setItemAdded(true)
    }

    const handleGoToCheckout = () => {
        setItemAdded(false)
        navigate("/cart")
    }


    return(
        <>
            {itemAdded ? (
                <button onClick={handleGoToCheckout}>Checkout</button>
                ) : (
                <>
                    <div>
                        <button onClick={() => handleClick("-")}>-</button>
                        <span> {qty} </span>
                        <button onClick={() => handleClick("+")}>+</button>
                    </div>

                    <button onClick={handleAddToCart}>Comprar</button>
                </>
                )}
        </>
    );
};

export default ItemCount;