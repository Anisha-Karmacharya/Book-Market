import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// importing components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BookList from './components/BookList/BookList';
import CartList from './components/CartList/CartList';
import "./App.scss"
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <div className="container-fluid bookList">
        <Switch>
            <Route path="/" exact component={BookList} />
            <Route exact path="/cart">
              <CartList />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
