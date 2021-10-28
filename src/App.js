import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct/AddProduct';
import Home from './Pages/Home/Home';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import Products from './Pages/Products/Products';
import Header from './Pages/Shared/Header/Header';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/adminDashboard">
           <AdminDashboard></AdminDashboard>
          </Route>
          <Route path="/update/:productId">
           <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </BrowserRouter>



    </div>
  );
}

export default App;
