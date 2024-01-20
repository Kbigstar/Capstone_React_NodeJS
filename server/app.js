require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); 
const router = require('./routes/routerctrl');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


PORT = 3001
  
app.use('/',router);

// app.get("/", (req, res) => {
    
//     res.json(req.body); 
//     console.log(req.body);
  
// }); 





app.listen(PORT , () => {
    console.log(`start server ${PORT}`)
});
