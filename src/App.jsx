import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext.jsx';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Error404 from './components/Error404/Error404.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Layout from "./pages/Layout.jsx";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
  const title = " nuevos usuarios";

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={ <ItemListContainer />} />
              <Route path='/productos' element={ <ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/about us' element={ <AboutUs />} />
              <Route path='/contact' element={ <Contact /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='*' element={ <Error404 /> } />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;