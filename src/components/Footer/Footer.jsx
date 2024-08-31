import "./Footer.css";
import { products } from "../../mock/mockData";
import { db } from "../../firebase/dbConnection";
import { collection, addDoc } from "firebase/firestore";

const Footer = () => {
    const addProducts = () =>{
        const productsCollection = collection(db, "productos")

        products.forEach((item)=>{
            addDoc(productsCollection, item)
            .then(doc =>{
                console.log("Producto agregado con ID: ", doc.id)
            })
            .catch(error => {
                console.log("Error al agregar el producto: ", error)
            })
        })
    } 
    return (
        <>
            {/* <button onClick={addProducts}>Agregar productos a base de datos</button> */}
        </>
    );
};

export default Footer;