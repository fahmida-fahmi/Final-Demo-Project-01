const User = require("../Model/User");

exports.createUser = async(req, res) => {
    // function createUser(req, res) {
    const { name, email, password } = req.body;
    const query = { email };
    const existingUser = await User.findOne(query);
    
    if (existingUser) {
      return res.send({ message: 'user already exists' })
    }

    const user = new User({
      name,
      password,
      email,
      role: 'user'

    });
    
    user
      .save()
      .then((data) => {
        res.json({
          message: "successfully inserted",
          data,
        });
      })
      .catch((error) => {
        res.json({ error: error });
      });
  };

exports.getAllUser = async (req, res) =>{
  const users = await User.find()
  res.send(users)
}

exports.deleteUser = async (req, res) =>{
  const id = req.params.id
  const deleteUser = { _id : new Object(id)}
  const result = await User.deleteOne(deleteUser)
  res.send(result)
}

// exports.createUser = async (req, res) =>{
//   try {
//     const { user } = req.body;
//     const query = { email: user?.email };
//     const existingUser = await User.findOne(query);

//     if (existingUser) {
//       return res.send({ message: 'user already exists' })
//     }

//     // const newUser = new User(user);
//     // const result = await newUser.save();

//     const result = await User.insertMany(user)
//     res.send(result)
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }


exports.updateUser = async(req, res) =>{
  const {id} = req.params 
  console.log(id);
  const filter = { _id : new Object(id)} 
  // const options = { upsert: true };

  const updateDoc = {
    $set: {
      role: 'admin',
    },
  }
  const result = await User.updateOne(filter, updateDoc)
  res.send(result)
}

exports.getAdminEmail = async (req, res) => {
  const email = req.params.email;

  if (req.decoded.email !== email) {
    res.send({ admin: false });
  } else {
    const query = { email: email };
    const user = await User.findOne(query);
    const result = { admin: user?.role === 'admin' };
    res.send(result);
  }
};

