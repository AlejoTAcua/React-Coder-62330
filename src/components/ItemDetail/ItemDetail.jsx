import "../Item/Item.css"

const ItemDetail = ({product}) => {

    const {title, description, price, image, id} = product;

    return(
        <>
            <div className="tarjeta">
                <div className="titleProduct">{title}</div>
                <img src={image} alt="imagen" />
                <div className="textProduct">{description}</div>
                <div>${price}</div>
                <div>{id}</div>
                <button>Comprar</button>
            </div>
        </>
    )
};

export default ItemDetail;