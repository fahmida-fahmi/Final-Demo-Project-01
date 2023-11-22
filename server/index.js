const express = require("express");
const reviewRouter = require('./Router/Reviews');
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const cartsRouter = require("./Router/cartsItems");
const router = require("./Router/userRouter");
const Carts = require("./Model/Cart");
const bookingsRouter = require("./Router/bookingsRouter");
const serviceRouter = require("./Router/servicesRouter");
const jwtRouter = require("./Router/jwt");
const paymentRoute = require("./Router/paymentRouter");
const adminRoute = require("./Router/adminRoute");
const createPaymentRoute = require("./Router/createPaymentIntent");
const authRoute = require("./Router/authRouter");
require("dotenv").config();

app.use(express.static('public'))
app.use(express.json());
app.use(cors());

// app.use(express.urlencoded({extended: true}))

// app.use(cors(
//   {
//     origin: ["https://deploy-mern-lwhq.vercel.app"],
//     methods: ["POST","GET"],
//     credentials: true
//   }
// ))

app.use('/jwt', jwtRouter)

app.use('/users', router)
 
app.use('/services', serviceRouter)

app.use("/reviews", reviewRouter);

app.use("/carts", cartsRouter)

app.use("/bookings", bookingsRouter)

app.use('/create-payment-intent', createPaymentRoute)

app.use('/payments', paymentRoute)

app.use('/admin', adminRoute)






const mongoURI = "mongodb://127.0.0.1:27017/restaurantDb";

// Connect to MongoDB using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    console.log(error.message);
    process.exit(1)
  }
};
app.get('/' , (req, res)=>{
  res.send('This web is successfully running')
})
app.listen(process.env.PORT, async() => {
  console.log(`app is running in ${process.env.PORT}`);
  await connectDB()
});
