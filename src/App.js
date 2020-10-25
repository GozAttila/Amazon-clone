import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

import {SET_USER} from "./actionTypes";

import './App.css';
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { ToastContainer } from "react-toastify";
// import Orders from "./Orders";
//
// const promise = loadStripe(
//     "pk_test_51HPvTBIOljmntfcQC1n0EJpWiklLHfLLbvIRmbtahMdllY6NNLF5vu7hw9O5PYBaTZdmf3ppAtWbhTbCzPZnx0o500tCU9bjNq"
// );

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
                            <Login />
                        </Route>

                        {/*<Route path="/orders">*/}
                        {/*    <Header />*/}
                        {/*    <Orders />*/}
                        {/*</Route>*/}

                        <Route path="/checkout">
                            <Header />
                            <Checkout />
                        </Route>

                        <Route path="/payment">
                            <Header />
                            <Payment />
                        {/*    <Elements stripe={promise}>*/}
                        {/*        <Payment />*/}
                        {/*    </Elements>*/}
                        </Route>

                        <Route path="/">
                            <Header />
                            <Home />
                        </Route>

                    </Switch>

                </div>

                {/*<ToastContainer style={{ marginTop: "45px" }} />*/}

            </Router>

        </div>
    );
}

export default App;
