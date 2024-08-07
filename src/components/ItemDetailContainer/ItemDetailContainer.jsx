import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { getProductById } from "../../utils/fetchData";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemListContainer/ItemListContainer.css";

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({});
    const { id } = useParams();
    const [ loading , setLoading ] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        getProductById(id)
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

    },[id]);

    return (
        <>
            <img className="fondo" src="https://res.cloudinary.com/jualbe/image/upload/v1722916721/Fondo.webp" alt="Fondo de pantalla" />

            <div className="container">
                <div className="title">ItemDetailContainer</div>
                {loading
                ? <Spinner />
                : (<div className="subcontainer">
                    <ItemDetail product={product} />
                </div>)}
            </div>
        </>
    )
};

export default ItemDetailContainer;