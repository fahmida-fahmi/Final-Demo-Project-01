const jwt = require('jsonwebtoken');

exports.addToken = (req,res) =>{
    const user = req.body 
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn : '1h'})
    res.send(token)
}