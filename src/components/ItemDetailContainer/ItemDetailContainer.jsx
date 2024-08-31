import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemListContainer/ItemListContainer.css";
import { db } from "../../firebase/dbConnection";
import { collection, getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({});
    const { productId } = useParams();
    const [ loading , setLoading ] = useState(true);

    useEffect(() => {
        setLoading(true);
        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, productId);

        getDoc(refDoc)
            .then((doc) =>{
                setProduct({id: doc.productId, ...doc.data()})
                setLoading(false);
            })
        .catch((error) => {
            setLoading(false);
            console.error("Error getting documents: ", error)
        })

    },[productId])

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