// const Reg = require("../Model/Reg");
// const User = require("../Model/User")
const bcrypt = require('bcryptjs');

exports.registration = async(req, res) =>{
    // 1. receive data

    const {email, password} = req.body 

    // 2. duplicate email 
    const findEmail = await Reg.findOne({email})

    if(findEmail){
        return res.json({
            message: 'Duplicate email. Enter a new email'
        })
    }
    // 3. password encrypt -- > bcrypt js 
    const salt = await bcrypt.genSalt(10)
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt)

    // 4. save data and response

    const user = new Reg({
        
        password: hashedPassword,
        email,
        
  
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
    // console.log('controller is running');

}