const express = require("express");
const mongoose = require("mongoose");
const medicineSchema = require("../mongodb/schemas/medicineSchema");


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
            res.status(200).json({ok: false, error: err})
        }else{
            res.status(200).json({ok: true, doc: doc})
        }
    })

})

// R for read operation
router.get("/read", async(req, res) => {

    console.log('hit read')

    const newMedicine = await medicineModel.find({});

    if(newMedicine){
        res.status(200).send({ok: true, doc: newMedicine})
    }else{
        res.status(500).send({ok: false, error: 'err'})
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

    console.log('hit')
    medicineModel.deleteOne({_id: mongoose.Types.ObjectId(req.params.id)}, (err, doc) => {
        console.log(req.params.id)
        if(err){
            console.log(err)
            res.status(401).send({ok: false, error: err})
        }else{
            console.log(doc)
            res.status(200).send({ok: true, doc: doc})
        }
    })
})

/**
 * Advached Operation
 */

// Create Multiple
router.post("/create-many", async(req, res) => {

    medicineModel.insertMany(req.body).then(doc => {
        res.status(200).send({ok: true, doc: doc})
    }).catch(err => {
        res.status(200).send({ok: false, error: err})
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