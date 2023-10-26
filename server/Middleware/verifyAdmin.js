const User = require("../Model/User")

exports.verifyAdmin = async (req, res, next) =>{
    const email = req.decoded.email 
    console.log('email',email);
    const query = { email: email}
    const user = await User.findOne(query)
    console.log('user',user);
    console.log('user role',user.role);

    if ( user && user.role === 'admin') {
        next();
    } else {
        return res.status(403).send({ error: true, message: 'Unauthorized' });
    }
    
}


// middleware always get 3 parameters req, res, next 