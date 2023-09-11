

import Tour from '../models/Tour.js';


//create new Tour

export const createTour = async (req,res)=>{

    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200)
            .json({
                success:true, 
                message:'Successfully created',
                data:savedTour,
                });

    } catch (err) {
        res.status(500)
        .json
        ({
            success:false, 
            message:'Not created. Try again', 
            data:savedTour,
        });
    }
};

//update tour
export const updateTour = async (req, res) => {

    const id = req.params.id

    try {

        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set:req.body
        }, {new:true})

        res.status(200)
        .json({
            success:true, 
            message:'Successfully updated',
            data:updateTour,
            });

    } catch (err) {
        res.status(500)
        .json
        ({
            success:false, 
            message:'Not updated. Try again', 
        });
    }
};

//delete tour
export const deleteTour = async (req, res) => {
    try{

    } catch (err) {}
};

//getSingleTour
export const getSingleTour = async (req, res) => {
    try{

    } catch (err) {}
};

//getAllTour
export const getAllTour = async (req, res) => {
    try{

    } catch (err) {}
};
