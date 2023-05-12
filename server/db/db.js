const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '',
  port     : '',
  user     : '',
  password : '',
  database : ''
  });
  


  connection.connect();


 
  connection.query('SELECT * FROM POSTS', function (error, results, fields) {
      if (error) {
          console.log(error);
      }
      console.log(results);
  });

  module.exports=connection;

  