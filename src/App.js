import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Shared/Navbar/Navigation';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Component/Shared/NotFound/NotFound';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        
        

        

       

        

        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
