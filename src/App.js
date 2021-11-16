import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.css"




function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/user/:id">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/product/:id">
            <Product/>
          </Route>
          <Route path="/newProduct">
            <NewProduct/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
