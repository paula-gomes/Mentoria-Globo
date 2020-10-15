const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bd_participantes.db');

/*db.all(`SELECT * FROM participantes`, [], (err,rows)=>{
    if(err) console.log(err);
    console.log(rows);
});*/

db.run(`UPDATE votacao SET total_votos_2 =  total_votos_2 + 1`,[],(err,rows)=>{
    if(err) console.log(err);
    console.log(rows);
}); 