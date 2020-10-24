import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

import './App.css';
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";

function App() {
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {

        auth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);

            if (authUser) {

                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <div className="app">
            <Router>
                <Switch>

                    <Route path="/login">
                        <Login/>
                    </Route>

                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>


                </Switch>
            </Router>

        </div>
    );
}

export default App;
