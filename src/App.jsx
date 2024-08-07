import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Error404 from './components/Error404/Error404.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Layout from "./pages/Layout.jsx";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  const title = " nuevos usuarios";

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={ <ItemListContainer title={title} greeting={"Bienvenidos"} />} />
            <Route path='/productos' element={ <ItemListContainer title={title} greeting={"Bienvenidos"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer title={title} greeting={"Bienvenidos"} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/about us' element={ <AboutUs />} />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='*' element={ <Error404 /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;