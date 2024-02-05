const  Bookings  = require("../Model/Bookings")

exports.addBookings = async(req,res) =>{

    try{
        const bookings = req.body 
        const result = await Bookings.insertMany(bookings)
        res.send(result)
    }
    catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ error: "An error occurred while fetching users." });
      }
}

// exports.getAllBookings = async (req,res) =>{
//     const getAllBookings = await Bookings.find()
//     res.send(getAllBookings)
// }

exports.getAllBookings = async(req, res) =>{
    const email = req.query.email;
    console.log(email);

    // if (!email) {
    //     res.send([]); // Send an empty response
    //     return; // Add a return statement to exit the function
    // }
    const decodedEmail = req.decoded.email 
    
    if(email !== decodedEmail){
        return res.status(401).send({error: true, message: 'forbidden access'})

    }

    try {
        const query = { email: email };
        const result = await Bookings.find(query);
        console.log(result); // Use Mongoose's find method
        res.send(result); // Send the database query result
    } catch (error) {
        // Handle any potential errors here
        console.error(error);
        res.status(500).send("An error occurred");
    }
}
exports.deleteBooking = async(req, res) =>{
    const id = req.params.id 
    const query = {_id : new Object(id)}
    const result  = await Bookings.deleteOne(query)
    res.send(result)
}