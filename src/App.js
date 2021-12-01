import './App.css';
import './index.css';
import "./components/cssResponsi/Responsi.css"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

//import Style bootstrap
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/cssResponsi/Responsi.css";



//import Components
import Home from './components/home/Home.jsx'
import MainHeader from "./components/Layout/MainHeader"
import ShowItems from "./components/viuws/showItems/ShowItem"
import Login from "./components/viuws/login/Login"
import Register from "./components/viuws/register/Register"
import CardPayments from "./components/viuws/Cardpayments/CardPayments"
// import Cards from "./components/viuws/card/Cards"

import { ProductProvider } from './Context/ProductContext';
import { AddProductProvider } from './Context/AddProductContext';
import {LoginProvider} from './Context/LoginContext';


function App() {
  return (
    <LoginProvider>
      <AddProductProvider>
        <ProductProvider >
          <BrowserRouter>
            <Switch>
              <MainHeader>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/Item/product:id" exact>
                  <ShowItems />
                </Route>
                <Route path="/Card.Payments" exact>
                  <CardPayments />
                </Route>
                <Route path="/category/:category" exact>
                  {/* <Cards /> */}
                </Route>
                <Route path="/Login" exact>
                  <Login />
                </Route>
                <Route path="/Register" exact>
                  <Register />
                </Route>
              </MainHeader>
            </Switch>
          </BrowserRouter>
        </ProductProvider>
      </AddProductProvider>
    </LoginProvider>
  );
}

export default App;
