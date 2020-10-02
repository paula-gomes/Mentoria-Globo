const sqlite = require("sqlite3").verbose();
const bd = new sqlite.Database('bd_votacao.sqlite');

process.on('SIGINT', () => {
    bd.close(() => {
        console.log('bd fechado');
        process.exit(0);
    });
});

module.exports = bd;