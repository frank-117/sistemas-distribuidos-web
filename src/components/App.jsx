import React, {Component} from 'react';
import "../styleSheets/App.css";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import AuthScreen from "./auth/AuthScreen";
import GeoScreen from "./geo/GeoScreen";
import ProductsScreen from "./products/ProductsScreen";
import NavbarComponent from "./common/NavbarComponent";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="full-screen">
                    <NavbarComponent/>
                    <div className="adjust-height">
                        <div className="fill-full-space">
                            <Route exact path="/"><Redirect to="/auth"/></Route>
                            <Route path="/auth" component={AuthScreen}/>
                            <Route path="/geo" component={GeoScreen}/>
                            <Route path="/products" component={ProductsScreen}/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
