const Reviews = require("../Model/Reviews");

exports.getAllReviews = async (req, res) => {
    try {
      const reviews = await Reviews.find(); // Retrieve all users from MongoDB
      res.send(reviews);
      // console.log(users);
    } catch (error) {
      console.error("Error retrieving users:", error);
      res.status(500).json({ error: "An error occurred while fetching users." });
    }
  };

exports.getBlogs = async (req, res) => {
  try {
    const result = await Reviews.find();
    res.send(result);
    console.log(result);
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    res.status(500).json({ error: "An error occurred while fetching blogs." });
  }
};

exports.addReview = async(req, res) =>{
    try{
        const review = req.body 
        const result = await Reviews.insertMany(review)
        res.send(result)
    }
    catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ error: "An error occurred while fetching users." });
      }
}