import express from 'express';
import { deleteUser, updateUser, getSingleUser, getAllUser } from '../controllers/userController.js';
const router = express.Router();

import { verifyUser } from '../utilis/verifyToken.js';


//update user
router.put('/:id', updateUser);

//delete user
router.delete('/:id', deleteUser);

//get singleuser
router.get('/:id', verifyUser, getSingleUser);

//get alluser
router.get('/', getAllUser);

export default router;

