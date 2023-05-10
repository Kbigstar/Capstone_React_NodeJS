const express = require('express');
const router = express.Router();

router.post("/boardwrite", (req, res)=>{
    const article = req.body;
    console.log(req.body);
});

module.exports = router;