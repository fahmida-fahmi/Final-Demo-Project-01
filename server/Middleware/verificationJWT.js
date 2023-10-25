const jwt = require('jsonwebtoken');

exports.verifyJWT = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).send({ error: true, message: 'unauthorized probesh' });
    }

    // Bearer token


    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if (err) {
            console.error('JWT Verification Error:', err); // Log the error
            return res.status(401).send({ error: true, message: 'unauthorized nished' });
        }
        req.decoded = decoded;
        next();
    });
}
