const express = require('express');
const router = express.Router()
const {createUser, getAllUser, deleteUser, updateUser, getAdminEmail} = require('../Controller/userController');
const { verifyJWT } = require('../Middleware/verificationJWT');
const { verifyAdmin } = require('../Middleware/verifyAdmin');


router.post('/', createUser)

router.get('/', getAllUser)

router.delete('/:id', deleteUser)

// router.post('/', getSingleUser)

router.patch('/admin/:id', updateUser)

router.get('/admin/:email', verifyJWT, getAdminEmail)


module.exports = router