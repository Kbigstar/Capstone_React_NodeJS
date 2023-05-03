require('dotenv').config()


const express = require('express');
const app = express();

const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded( {extended: true}))
app.use(cors())

PORT = 3001




app.listen(PORT , () => {
    console.log(`start server ${PORT}`)
});

app.post("/login",(req,res) => {
    console.log(req.body.id)

    id = req.body.id
    res.send('good')
    console.log('hi')
})


