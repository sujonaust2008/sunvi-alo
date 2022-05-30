import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Shared/Navbar/Navigation';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Component/Shared/NotFound/NotFound';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register/Register';
import ProductsDetails from './Component/Home/ProductsDetail';
import RequireAuth from './Component/Login/RequirAuth/RequireAuth';
import MyPortfolio from './Component/MyPortfolio/MyPortfolio';
import UserOrders from './Component/Dashboard/UserOrders/UserOrders';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div >
      <Navigation></Navigation>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path= '/manufacturer/:productId' element={<RequireAuth>
          <ProductsDetails></ProductsDetails>
        </RequireAuth>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/manufacturer/:id/:order' element={<UserOrders></UserOrders>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        

       

        

        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
