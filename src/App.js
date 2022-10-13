import NavBar from "./components/Header/NavBar.jsx";
import ItemListContainer from "./components/Main/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import Cart from "./components/Cart/Cart.jsx";
import Home from "./components/Main/Home";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/category/Home" element={<Home />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
