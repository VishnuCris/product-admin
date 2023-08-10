import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageLayout from './components/homePageLayout'
import ProductList from './components/productList'
import EditProduct from './components/editProduct'
import AddProduct from './components/addProduct'
import SignUp from './components/signup'
import Login from './components/login'
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="list" element={<ProductList />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
