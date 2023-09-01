const express = require('express');
const mongoose = require('mongoose');
const app = express();
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const productRoute = require('./routes/productRoutes')


require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL

// use midleware
app.use(cors())
app.use(errorMiddleware)
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.use('/api/product', productRoute)

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('connected to MongoDB');

        app.listen(5000, () => {
            console.log(`server running on port 5000`)
        })
    }).catch((err) => {
        console.log(err);
    })
