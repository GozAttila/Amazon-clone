import React from 'react'
import CurrencyFormat from "react-currency-format";
import dayjs from "dayjs";

import './Order.css'
import CheckoutProduct from "./CheckoutProduct";


function Order({order}) {

    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{dayjs(order.data.created * 1000).format('DD/MM/YYYY hh:mm')}</p>
            <p className="order__id">
                <small>Order Id: {order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
        </div>
    )
}

export default Order
