const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.post("/boardWrite", async(req, res)=>{
    var article = req.body;
    console.log(req.body);
    
    await db.query('insert into POSTS (post_title, post_article) values(?, ?)', [
        article.title, article.detail
      ], function(){
        res.redirect('/');
      })
    });

router.get("/board", (req, res) =>{
    db.query('SELECT * FROM POSTS', function(err, rows, fields){
        if(err){
            console.log('데이터 가져오기 실패');
        } else{
            const article = rows;
            res.json(article);
        }
    })
});

router.post("/boardDetail", (req, res) =>{
    let title = req.body.title;
    console.log(title)

    db.query('SELECT * FROM POSTS WHERE post_title= ?', title, function(err, rows, fields){
        if(err){
            console.log('데이터 가져오기 실패');
        } else{
            const article = rows;
            console.log(rows)

            return res.json(article);
        }
    })
});



// router.get("/boardDelete", (req, res) =>{
//     db.query('DELETE FROM POSTS WHERE post_num=? ', [req.params.num], function(){
//         res.redirect('/');
//     })
// })

module.exports = router;