import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
    const [qty, setQty] = useState(initial);

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

    return(
        <div>
            <button onClick={() => handleClick("-")}>-</button>
            <span> {qty} </span>
            <button onClick={() => handleClick("+")}>+</button>
        </div>
    );
};

export default ItemCount;