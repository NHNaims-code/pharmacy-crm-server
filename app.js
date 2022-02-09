const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors())
app.use(bodyParser.json())

// Initialize mongoose
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.sjmet.mongodb.net/pharmacy_crm?retryWrites=true&w=majority`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
}).then(msg => {
    console.log('Mongodb connected ');
}).catch(err => {
    console.log(err)
});

// routes
const medicineRoute = require("./mongodb/routes/medicineRoute");

app.use("/medicine", medicineRoute)

app.get("/", (req, res) => {
    res.send(`<h1>Hello world</h1>`);
})

app.listen(port || process.env.PORT, () => console.log(`Server running success! port: ${port}`))