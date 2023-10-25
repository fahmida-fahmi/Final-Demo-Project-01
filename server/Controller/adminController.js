// exports.getAdmin = async(req, res) =>{
//     const { name, email, password,  } = req.body;
//     const query = { email };
//     const existingUser = await User.findOne(query);

const Admins = require("../Model/Admin");

//     if (existingUser) {
//       return res.send({ message: 'user already exists' })
//     }

//     const user = new User({
//       name,
//       password,
//       email
//     });

//     user
//       .save()
//       .then((data) => {
//         res.json({
//           message: "successfully inserted",
//           data,
//         });
//       })
//       .catch((error) => {
//         res.json({ error: error });
//       });
// }

exports.getAllAdmin = async (req, res) => {
  const users = await Admins.find();
  res.send(users);
};

exports.getSingleAdmin = async ( req,res) =>{
    const email = req.params.email;

  if (req.decoded.email !== email) {
    res.send({ admin: false });
  } else {
    const query = { email: email };
    const user = await Admins.findOne(query);
    const result = { admin: user?.role === 'admin' };
    res.send(result);
  }
}
