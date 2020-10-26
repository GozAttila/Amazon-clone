require('dotenv').config()
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SK)

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request total", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // sub-units of the currency
        currency: "eur",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-8e70a/us-central1/api
