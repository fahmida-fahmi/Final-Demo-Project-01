const express = require("express");
const { getAllServices, addServices, updateService, getSingleItem, deleteService } = require("../Controller/servicesController");
const { verifyJWT } = require("../Middleware/verificationJWT");
const { verifyAdmin } = require("../Middleware/verifyAdmin");
const serviceRouter = express.Router();


serviceRouter.get("/", getAllServices);

serviceRouter.get("/:id", getSingleItem)

serviceRouter.post("/", verifyJWT,verifyAdmin, addServices);

serviceRouter.patch('/:id', updateService)

serviceRouter.delete('/:id',verifyJWT,verifyAdmin, deleteService)


// export default route
module.exports = serviceRouter;
