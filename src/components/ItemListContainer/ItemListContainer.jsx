import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/dbConnection.js";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner.jsx";
import { useCartContext } from "../../context/CartContext.jsx";

const ItemListContainer = () => {
    const [ products, setProducts ] = useState([]);
    const { categoryId } = useParams();
    const [ loading , setLoading ] = useState(true);
    const { titulo } = useCartContext();
    let title = titulo;
    
    useEffect(()=>{
        setLoading(true);
        let productsCollection = collection(db, "productos")

        if (categoryId){
            productsCollection = query(productsCollection,where("category", "array-contains", categoryId));

            getDocs(productsCollection)
                        .then(({docs}) =>{
                            const prodFromDocs = docs.map((doc)=>({
                                id: doc.id,
                                ...doc.data()
                        }))
                        setProducts(prodFromDocs)
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error("Error getting documents: ", error)
                    });
        } else {
            getDocs(productsCollection)
                        .then(({docs}) =>{
                            const prodFromDocs = docs.map((doc)=>({
                                id: doc.id,
                                ...doc.data()
                        }))
                        setProducts(prodFromDocs)
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error("Error getting documents: ", error)
                    });
        }
        

        setLoading(false);
    }, [categoryId]);



    return (
        <>
            <img className="fondo" src="https://res.cloudinary.com/jualbe/image/upload/v1722916721/Fondo.webp" alt="Fondo de pantalla" />

            <div className="container">
                <div className="title">{title}</div>
                {loading
                ? <Spinner />
                : (<div className="subcontainer">
                    <ItemList products={products} />
                </div>)}
            </div>
        </>
    )
};

export default ItemListContainer;