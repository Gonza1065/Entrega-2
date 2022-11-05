import NavBar from "./components/Header/NavBar.jsx";
import ItemListContainer from "./components/Main/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import Cart from "./components/Cart/Cart.jsx";
import Home from "./components/Main/Home";
import Form from "./components/Form/Form.jsx";
import Provider from "./components/context/CartContext";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
