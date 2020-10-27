import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useStateValue} from "../../store/StateProvider";
import CurrencyFormat from "react-currency-format";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "../../axios/axios";
import {db} from "../../firebase";

import {getBasketTotal} from "../../store/reducer";

import "./Payment.css";
import CheckoutProduct from "../Checkout/CheckoutProduct";

const Payment = () => {
    const history = useHistory();
    const [{user, basket}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        console.log("in payment useEffect, total", getBasketTotal(basket) * 100)
        const getClientSecret = async () => {
            console.log("in getClientSecret")
            try {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}` // multiplier means the amount have to be in currency sub-units
            })
            setClientSecret(response.data.clientSecret)
            console.log("in payment useEffect, response", response)
            console.log("Client-secret", clientSecret)
            } catch (error) {console.log("useEffect error", error)}
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            })
            .then(({paymentIntent}) => {
                db.collection("users")
                    .doc(user?.uid)
                    .collection("orders")
                    .doc(paymentIntent.id)
                    .set({
                        basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: "EMPTY_BASKET",
                });

                history.replace("/orders");
            });
    };

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className="payment__cardElement">
                                <CardElement onChange={handleChange}/>
                                <p className="payment__cardWarning">For testing, you must use card number<br />4242 4242 4242 4242<br />with any future date</p>
                            </div>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => <h3>Order Total: {value}</h3>}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType="text"
                                    thousandSeperator={true}
                                    prefix="€"
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>error</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
