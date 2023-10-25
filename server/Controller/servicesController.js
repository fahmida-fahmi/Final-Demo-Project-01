const Services = require("../Model/Services");

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find(); // Retrieve all users from MongoDB
    res.send(services);
    // console.log(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
};

exports.addServices = async (req, res) => {
  const service = req.body;
  const result = await Services.insertMany(service);
  res.send(result);
};

exports.getSingleItem = async (req, res) => {
  try {
    const { id } = req.params;
    // const query = { _id: new Object(id) };
    console.log(id);
    const result = await Services.findById(id);
    res.send(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

exports.updateService = async (req, res) => {
  // const id = req.params.id;
  // const service = req.body;
  // const filter = { _id: new Object(id) };
  // const options = { upsert: true };

  // const updateService = {
  //   $set: {
  //     recipeName: service.recipeName,
  //     category: service.category,
  //     price: service.price,
  //     details: service.details,
  //   },
  // };
  // const result = await Services.updateOne(filter, updateService, options);
  // res.send(result);

  const id = req.params.id;
  const serviceData = req.body;

  try {
    // Use Mongoose's findByIdAndUpdate to update the service by its _id
    const result = await Services.findByIdAndUpdate(id, serviceData, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteService = async (req, res) => {
  const { id } = req.params;
  const result = await Services.deleteOne({ _id: id });
  res.send(result);
};

// exports.middleware  = (req, res,next) =>{
//   console.log('middleware is running');
//   next()
// }
