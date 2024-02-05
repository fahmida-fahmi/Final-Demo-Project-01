const Carts = require("../Model/Cart");
const Payment = require("../Model/Payment");
const Bookings = require("../Model/Payment");

// never do this 
const stripe = require("stripe")('sk_test_51O4NTuDLmF7zT256F2qSrdYJLJUfTmH7ynUEBSZQ2q1cBXLka48G5th0kE9o6IWpPHyK2Fbs9f4UmsA7Td2Us3As00S79GCfda');

// const stripe = require("stripe")(process.env.ACCESS_TOKEN_SECRET);


exports.createPayment = async (req, res) => {
  const { price } = req.body;
  console.log(price);
  const amount = parseFloat(price * 100);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

exports.postPaymentInfo = async (req, res) => {
    const payment = req.body;
    // const insertResult = await 
    const insertResult = await Payment.insertMany(payment)

    const query = { _id: { $in: payment.cartItems.map(id => new Object(id)) } }
    
    const deleteCarts = await Carts.deleteMany(query)
    // const deletePayments = await Bookings.deleteMany(query)

    res.send({ insertResult, deleteCarts });
};

exports.getAllPayments = async(req, res) =>{
  const email = req.query.email;
  // console.log(email);

  if (!email) {
      res.send([]); // Send an empty response
      return; // Add a return statement to exit the function
  }
  const decodedEmail = req.decoded.email 
  
  if(email !== decodedEmail){
      return res.status(401).send({error: true, message: 'forbidden access'})

  }

  try {
      const query = { email: email };
      const result = await Payment.find(query); // Use Mongoose's find method
      res.send(result); // Send the database query result
  } catch (error) {
      // Handle any potential errors here
      console.error(error);
      res.status(500).send("An error occurred");
  }
}
