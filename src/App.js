
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
