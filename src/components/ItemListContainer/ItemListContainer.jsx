import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";
import { getProducts } from "../../utils/fetchData.js";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner.jsx";


const ItemListContainer = ({ title, greeting }) =>{
    const [ products, setProducts ] = useState([]);
    /* const [ cat, setCat ] = useState("Foto"); */
    const { categoryId } = useParams();
    const [ loading , setLoading ] = useState(true);
    
    useEffect(()=>{
        console.log('Se renderizo el componente');
        setLoading(true);
        getProducts(categoryId)
            .then((res) => {
                console.log('Se ejecuto la promesa')
                setProducts(res);
                console.log('Se actualizaron los productos')
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log('Finalizo la promesa');
                setLoading(false);
            });
    }, [categoryId]);



    return (
        <>
            <img className="fondo" src="https://res.cloudinary.com/jualbe/image/upload/v1722916721/Fondo.webp" alt="Fondo de pantalla" />

            <div className="container">
                <div className="title">{greeting}{title}</div>
                {/* <div className="filter">
                    <button onClick={()=> setCat("Video")}>Set Cat = Videos</button>
                    <button onClick={()=> setCat("Foto")}>Set Cat = Fotos</button>
                    <button onClick={()=> setCat("Plataforma 360")}>Set Cat = Plataforma 360</button>
                    <button onClick={()=> setCat("Fotocabina")}>Set Cat = Fotocabina</button>
                    <button onClick={()=> setCat("Espejo Mágico")}>Set Cat = Espejo</button>
                    <button onClick={()=> setCat("Otros")}>Set Cat = Otros</button>
                </div> */}
                {loading
                ? <Spinner />
                : (<div className="subcontainer">
                    <ItemList products={products} />
                    {/* <ItemCount stock={5} initial={1}/> */}
                </div>)}
            </div>
        </>
    )
};

export default ItemListContainer;