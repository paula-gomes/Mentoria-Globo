// Esse arquivo deve ser rodado apenas uma vez //
const path = require('path');
const sqlite3 = require("sqlite3").verbose();

const bdPath = path.resolve(__dirname, 'bd_participantes.db');
const bd = new sqlite3.Database(bdPath);

const PARTICIPANTES_SCHEMA =`

CREATE TABLE IF NOT EXISTS participantes (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    url TEXT
);`

const VOTACAO_SCHEMA=`

CREATE TABLE IF NOT EXISTS votacao (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_1 INTEGER,
    id_2 INTEGER,
    total_votos_1 INTEGER,
    total_votos_2 INTEGER 
);`

/*const VOTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS votos (

    id_votos INTEGER PRIMARY KEY AUTOINCREMENT,
    id_participante INTEGER );`*/

const ADD_PARTICIPANTES = `
INSERT or IGNORE INTO participantes (
    nome,
    url
) 
VALUES
    ('Babu Santana', 'https://bbb2020.com.br/wp-content/uploads/2019/02/babu-santana-bbb-20-768x432.jpg'),
    ('Bianca Andrade', 'https://bbb2020.com.br/wp-content/uploads/2019/02/bianca-andrade-bbb-20-768x432.jpg'),
    ('Felipe Prior', 'https://bbb2020.com.br/wp-content/uploads/2019/02/felipe-bbb-20-768x432.jpg'),
    ('Flayslane da Silva', 'https://bbb2020.com.br/wp-content/uploads/2019/02/flayslane-bbb-20-768x432.jpg'),
    ('Gabriela Martins', 'https://bbb2020.com.br/wp-content/uploads/2019/02/gabi-martins-bbb-20-768x432.jpg'),
    ('Gizely Bicalho', 'https://bbb2020.com.br/wp-content/uploads/2019/02/gizelly-bbb-20-768x432.jpg'),
    ('Guilherme Napolitano', 'https://bbb2020.com.br/wp-content/uploads/2019/02/guilherme-bbb-20-768x432.jpg'),
    ('Hadson Nery', 'https://bbb2020.com.br/wp-content/uploads/2019/02/hadson-bbb-20-768x432.jpg'),
    ('Lucas Chumbo', 'https://bbb2020.com.br/wp-content/uploads/2019/02/lucas-chumbo-bbb-20-768x432.jpg'),
    ('Lucas Gallina', 'https://bbb2020.com.br/wp-content/uploads/2019/02/lucas-bbb-20-768x432.jpg'),
    ('Manoela Gavassi', 'https://bbb2020.com.br/wp-content/uploads/2019/02/manu-gavassi-bbb-20-768x432.jpg'),
    ('Marcela Mc Gowan', 'https://bbb2020.com.br/wp-content/uploads/2019/02/marcela-bbb-20-768x432.jpg'),
    ('Mariana Gonzalez', 'https://bbb2020.com.br/wp-content/uploads/2019/02/mari-gonzalez-bbb-20-768x432.jpg'),
    ('Petrix Barbosa', 'https://bbb2020.com.br/wp-content/uploads/2019/02/petrix-barbosa-bbb-20-768x432.jpg'),
    ('Pyong Lee', 'https://bbb2020.com.br/wp-content/uploads/2019/02/pyong-lee-bbb-20-768x432.jpg'),
    ('Rafaela Kalimann', 'https://bbb2020.com.br/wp-content/uploads/2019/02/rafa-kalimann-bbb-20-768x432.jpg'),
    ('Thelma Assis', 'https://bbb2020.com.br/wp-content/uploads/2019/02/thelma-bbb-20-768x432.jpg'),
    ('Victor Hugo teixeira', 'https://bbb2020.com.br/wp-content/uploads/2019/02/victor-hugo-bbb-20-768x432.jpg');`

//criar banco votacao
const ADD_VOTACAO = `
INSERT or IGNORE INTO votacao (
    id_1,
    id_2,
    total_votos_1,
    total_votos_2
) 
VALUES
		(1,16,0,0);
`


bd.serialize(()=>{

    /*bd.run(PARTICIPANTES_SCHEMA,(err)=>{
        if(err){
        	console.log(err);
        	process.exit(1);
        }        
    });

    bd.run(VOTACAO_SCHEMA,(err)=>{
        if(err){
        	console.log(err);
        	process.exit(1);
        }
    });

    bd.run(ADD_PARTICIPANTES, (err)=>{
        if (err){
        	console.log(err);
        	process.exit(1);
        }
        });
    bd.run(ADD_VOTACAO, (err)=>{
            if (err){
                console.log(err);
                process.exit(1);
        }
    }); */

        
}); 

module.exports = bd;