import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { categories } from "./mock/mockData.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {

  const title = "Equipos";
  return (
    <>
      <Navbar categories={categories} title="Copa América"/>
      <ItemListContainer title={title} greeting={"Bienvenidos al Torneo"}/>
    </>
    
  );
};

export default App;
