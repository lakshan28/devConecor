import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

//react-redux
import { Provider } from "react-redux";
//import { createStore, applyMiddleware } from "redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

//Redux
// const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
