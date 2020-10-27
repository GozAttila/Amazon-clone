import React, {useEffect, useState} from 'react';
import {useStateValue} from "../../store/StateProvider";
import {db} from "../../firebase";

import "./Orders.css";
import Order from "./Order";

const Orders = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if(user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }

    }, [user])

    return (
        <div className="orders">
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} key={order.id}/>
                ))}
            </div>
        </div>
    );
};

export default Orders;
