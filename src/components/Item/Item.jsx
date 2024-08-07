import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return( 
        <div className="tarjeta">
            <div className="titleProduct">{product.title}</div>
            <img src={product.image} alt="" />
            <div className="textProduct">{product.description}</div>
            <div>${product.price}</div>
            <Link to={`/detail/${product.id}`}><button>Details</button></Link>
        </div>
    );
};

export default Item;