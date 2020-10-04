const path = require('path');
const sqlite3 = require("sqlite3").verbose();

const bdPath = path.resolve(__dirname, 'bd_participantes.db');
const bd = new sqlite3.Database(bdPath);

process.on('SIGINT', () => {
    bd.close(() => {
        console.log('bd fechado');
        process.exit(0);
    });
});

module.exports = bd;