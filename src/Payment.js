import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "./axios";
import { db } from "./firebase";

import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";

const Payment = () => {
    const [{ user, basket }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>1234 Somewhere str.</p>
                        <p>Anywhere</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Methods</h3>
                    </div>
                    <div className="payment__details">
                        {/*<form onSubmit={handleSubmit}>*/}
                        {/*    <CardElement onChange={handleChange} />*/}
                        {/*    <div className="payment__priceContainer">*/}
                        {/*        <CurrencyFormat*/}
                        {/*            renderText={(value) => <h3>Order Total: {value}</h3>}*/}
                        {/*            decimalScale={2}*/}
                        {/*            value={getBasketTotal(basket)}*/}
                        {/*            displayType="text"*/}
                        {/*            thousandSeperator={true}*/}
                        {/*            prefix="$"*/}
                        {/*        />*/}
                        {/*        <button disabled={processing || disabled || succeeded}>*/}
                        {/*            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*    {error && <div>error</div>}*/}
                        {/*</form>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
