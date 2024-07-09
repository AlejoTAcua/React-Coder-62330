import ItemCount from "../ItemCount/ItemCount.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

const ItemListContainer = ({ title }) =>{
    return (
        <>
            <div className="a">
            <div><p>1</p></div>
            <div className="container">
                <div>{title}</div>
                <ItemList />
                <ItemCount stock={11} initial={1}/>
            </div>
            <div><p>1</p></div>
            </div>
        </>
    )
};

export default ItemListContainer;