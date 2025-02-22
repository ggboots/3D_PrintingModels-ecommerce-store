const express = require('express');
const stripe = require('stripe');

const app = express();
const stripeKey = stripe(process.env.STRIPE_KEY)

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
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
    success_url: 'http://localhost:4242/success',
    cancel_url: 'http://localhost:4242/cancel',
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));