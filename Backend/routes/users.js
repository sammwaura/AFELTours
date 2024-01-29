import express from 'express';
import { deleteUser, updateUser, getSingleUser, getAllUser } from '../controllers/userController.js';
const router = express.Router();

import { verifyUser, verifyAdmin } from '../utilis/verifyToken.js';


//update user
router.put('/:id', verifyUser, updateUser);

//delete user
router.delete('/:id',verifyUser, deleteUser);

//get singleuser
router.get('/:id', verifyUser, getSingleUser);

//get alluser
router.get('/',verifyAdmin, getAllUser);

export default router;

