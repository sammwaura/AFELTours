import express from 'express';
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } from './../controllers/tourController.js';

const router = express.Router();

//create new tour
router.post('/', createTour);

//update tour
router.put('/:id', updateTour);

//delete tour
router.delete('/:id', deleteTour);

//get singletour
router.get('/:id', getSingleTour);

//get alltour
router.get('/', getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);


export default router;