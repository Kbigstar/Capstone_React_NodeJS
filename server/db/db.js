const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '114.70.85.165',
  port     : '3306',
  user     : 'qhtjd',
  password : '1234',
  database : 'RIScapdb'
  });
  


  connection.connect();


 
  connection.query('SELECT * FROM POSTS', function (error, results, fields) {
      if (error) {
          console.log(error);
      }
    //   console.log(results);
  });

  module.exports=connection;

  