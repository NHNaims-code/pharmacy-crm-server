const express = require("express");
const mongoose = require("mongoose");
const medicineSchema = require("../schemas/medicineSchema");


const router = express.Router();

const medicineModel = mongoose.model("medicine", medicineSchema);


/**
 * CRUD Operations
 */

// C for create operation
router.post("/create", async(req, res) => {

    console.log("create successfully respond!");
    const newMedicine = await new medicineModel(req.body);

    newMedicine.save((err, doc) => {

        if(err){
            // console.log(err);
            res.status(200).json({err: "Something went wrong", errDoc: err})
        }else{
            res.status(200).json({msg: "Success!", doc: doc})
        }
    })

})

// R for read operation
router.get("/read", async(req, res) => {

    const newMedicine = await medicineModel.find({});

    if(newMedicine){
        res.status(200).json({msg: "Success!", doc: newMedicine})
    }else{
        res.status(500).json({err: "Something went wrong, try again."})
    }
})

// U for update operation
// router.get("/update", async(req, res) => {

//     const newMedicine = await medicineModel.find({});

//     if(newMedicine){
//         res.status(200).json({msg: "Success!", doc: newMedicine})
//     }else{
//         res.status(500).json({err: "Something went wrong"})
//     }
// })

// D for delete operation
router.delete('/delete/:id', async(req, res) => {
    medicineModel.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.status(500).json({err: "Something went wrong, try again.", errDoc: err})
        }else{
            res.status(200).json({msg: 'Successfully deleted!'})
        }
    })
})

/**
 * Advached Operation
 */

// Create Multiple
router.post("/insert-many", async(req, res) => {

    medicineModel.insertMany(req.body).then(doc => {
        res.status(200).json({msg: "Success!", doc: doc})
    }).catch(err => {
        res.status(200).json({err: "Something went wrong", errDoc: err})
    })
    // const newMedicine = await new medicineModel(req.body);

    // newMedicine.save((err, doc) => {

    //     if(err){
    //         console.log(err);
    //         res.status(200).json({err: "Something went wrong", errDoc: err})
    //     }else{
    //         res.status(200).json({msg: "Success!", doc: doc})
    //     }
    // })

})


module.exports = router;