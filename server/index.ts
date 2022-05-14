const express = require("express");
const mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Musa123',
  database: 'UserDB'
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  db.query('SELECT * FROM Users', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/insert", (req, res) => {
  db.query('INSERT INTO Users (firstName, lastName, email, phoneNumber, address, dob) VALUES ("Test", "Tester 2", "tester2@gmail.com", "888-888-8888", "123 1st St", "11-12-1980")', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});