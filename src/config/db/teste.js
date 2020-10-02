const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bd_votacao.sqlite');

db.all(`SELECT * FROM participantes`, [], (err,rows)=>{
    if(err) console.log(err);
    console.log(rows);
});