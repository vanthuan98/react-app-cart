import "./App.css";
import "./bootstrap-grid.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";

import React, { Component } from "react";

class App extends Component {
	render() {
        return (
            <div className="app">
                <Header />
                <Main />
                <Cart />
            </div>
        )
	}
}

export default App;
