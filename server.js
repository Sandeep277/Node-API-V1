// insetall express -> it is a nodeJs framework 
const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
    res.send('HOME PAGE')
})

app.listen(5000, () => {
    console.log(`server running on port 5000`)
})