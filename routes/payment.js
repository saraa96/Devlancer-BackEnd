// const stripe = require("stripe")('sk_test_Ff2bS0jmfdROzluUbkqTVXtK00sk1Zh40k');
// const stripeChargeCallback = res => (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).send({ error: stripeErr });
//     } else {
//       res.status(200).send({ success: stripeRes });
//     }
//   };const paymentApi = app => {
//     app.get("/", (req, res) => {
//       res.send({
//         message: "Hello Stripe checkout server!",
//         timestamp: new Date().toISOString()
//       });
//     });app.post("/", (req, res) => {
//       const body = {
//         description: req.body.description,
//         source: req.body.token.id,
//         amount: req.body.amount,
//         currency:req.body.currency
//       };
//       stripe.charges.create(body, stripeChargeCallback(res));
//   });  return app;
//   };module.exports = paymentApi;
