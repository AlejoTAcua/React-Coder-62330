import ItemCount from "../ItemCount/ItemCount.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

const ItemListContainer = ({ title, greeting }) =>{
    return (
        <>
            <div className="container">
                <div className="title">{greeting}{title}</div>
                <div className="subcontainer">
                    <ItemList />
                    <ItemCount stock={11} initial={1}/>
                </div>
                
            </div>
        </>
    )
};

export default ItemListContainer;