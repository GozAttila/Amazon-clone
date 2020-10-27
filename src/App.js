import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useStateValue} from "./store/StateProvider";
import {auth} from "./firebase";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

import {SET_USER} from "./store/actionTypes";

import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Order/Orders";


const promise = loadStripe(
    "YOUR_STRIPE_PUBLIC_KEY"
);

function App() {
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {

        auth.onAuthStateChanged((authUser) => {

            if (authUser) {
                dispatch({
                    type: SET_USER,
                    user: authUser,
                });
            } else {
                dispatch({
                    type: SET_USER,
                    user: null,
                });
            }
        });
    }, []);

    return (
        <div className="app">
            <Router>

                <div className="app">

                    <Switch>

                        <Route path="/login">
                            <Login/>
                        </Route>

                        <Route path="/orders">
                            <Header />
                            <Orders />
                        </Route>

                        <Route path="/checkout">
                            <Header/>
                            <Checkout/>
                        </Route>

                        <Route path="/payment">
                            <Header/>
                            <Elements stripe={promise}>
                                <Payment/>
                            </Elements>
                        </Route>

                        <Route path="/">
                            <Header/>
                            <Home/>
                        </Route>

                    </Switch>

                </div>

            </Router>

        </div>
    );
}

export default App;
