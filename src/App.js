import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Switch, Redirect } from "react-router-dom";
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
import Login from './components/form/Login';
import SignUp from './components/form/SignUp';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/products" />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;