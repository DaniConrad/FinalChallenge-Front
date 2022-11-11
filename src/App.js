import Login from './components/Auth/login';
import ItemListContainer from './components/Products/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Products/Detail/ItemDetailContainer/ItemDetailContainer';
import NavbarD from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Cart/Checkout';
import { Uploads } from './components/Admin/Uploads/Uploads';
import SignUp from './components/Auth/SignUp';
import Profile from './components/Auth/Profile';
import OrdersContainer from './components/Orders/OrdersContainer/OrdersContainer';
import Chat from './components/Chat/Chat';

function App() {

  return (
  <UserProvider>
    <BrowserRouter>
        <div className='App'>
          <NavbarD />
          <Routes>
          <Route path='/' element={<ItemListContainer />}  />
          <Route path='/products' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/admin' element={<Uploads />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/orders' element={<OrdersContainer />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/auth' element={<Login />} />
          
          </Routes>
        </div>
    </BrowserRouter>
  </UserProvider>
  )
}

export default App;
