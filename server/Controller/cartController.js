const Carts = require("../Model/Cart");

exports.addItemToCart = async (req, res) => {
    const item = req.body 
    console.log(item)
    const result = await Carts.insertMany(item)
    res.send(result)
};

exports.getAllCartItem = async(req, res) =>{
    const email = req.query.email;
    console.log(email);

    if (!email) {
        res.send([]); // Send an empty response
        return; // Add a return statement to exit the function
    }
    const decodedEmail = req.decoded.email 
    
    if(email !== decodedEmail){
        return res.status(401).send({error: true, message: 'forbidden access'})

    }

    try {
        const query = { email: email };
        const result = await Carts.find(query); // Use Mongoose's find method
        res.send(result); // Send the database query result
    } catch (error) {
        // Handle any potential errors here
        console.error(error);
        res.status(500).send("An error occurred");
    }
}

exports.deleteCartItem = async(req,res) =>{
    
    try {
        const cartItemId = req.params.id;
        const query = {_id: new Object(cartItemId)}
    
        // Find the cart item by its ID and delete it
        const deletedCartItem = await Carts.deleteOne(query);
    
        if (!deletedCartItem) {
          return res.status(404).json({ message: 'Cart item not found' });
        }
    
        // res.status(200).json({ message: 'Cart item deleted successfully' });
        res.send(deletedCartItem)
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }

    // const query = { _id: new Object(id)}
    // const result = await Carts.deleteOne(query)
    // res.send(result)

}
