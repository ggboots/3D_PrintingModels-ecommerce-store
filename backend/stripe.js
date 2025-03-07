const express = require('express');
const stripe = require('stripe');

require("dotenv").config();
const stripeKey = stripe(process.env.STRIPE_KEY)

const router = express.Router()
// const app = express();


router.post('/create-checkout-session', async (req, res) => {
  const session = await stripeKey.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'aud',
          product_data: {
            name: 'Socket-Holder',
          },
          unit_amount: 1500,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({url: session.url});
});

module.exports = router;