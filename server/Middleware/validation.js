exports.validate = (req, res, next) => {
//   console.log("middleware function");
  const { email, password, confirmedPassword} = req.body 
    if(password !== confirmedPassword){
        return res.json({
            message: `password doesn't match`
        })
    }
    // const re = /\S+@S+\.\S+/
    // const result = re.test(email)
    // if(!result){
    //     res.json({
    //         message: 'wrong email'
    //     })
    // }
  next();
};

/*
    route e onk gula function likhle just last er ta controller hobe r baki gula middleware and 1st middleware call kora hole oita kaj korbe then jdi next dei tahole next function e jabe route er other wise loading dekhabe cuz amr to next dei nai j jabe . like - 
    authRoute.post('/',validate, registration)
    validate is a middleware and above it's the function of validate and also right the next()

*/
