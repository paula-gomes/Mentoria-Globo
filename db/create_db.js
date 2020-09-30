const sqlite = require("sqlite3").verbose();
const bd = new sqlite.Database('bd_votacao.sqlite');

const PARTICIPANTES_SCHEMA =`

CREATE TABLE IF NOT EXISTS participantes (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    url TEXT
);`

const VOTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS votos (

    id_votos INTEGER PRIMARY KEY AUTOINCREMENT,
    id_participante INTEGER );`

bd.serialize(()=>{

    bd.run(PARTICIPANTES_SCHEMA,(err)=>{
        console.log(err);
        process.exit(1);
    });

    bd.run(VOTOS_SCHEMA,(err)=>{
        console.log(err);
        process.exit(1);
    });

});

process.on('SIGINT',()=>{

    bd.close(()=>{
        console.log('bd fechado');
        process.exit(0);
    });

});


