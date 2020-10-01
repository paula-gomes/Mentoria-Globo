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

bd.serialize(()=>{

    bd.run(PARTICIPANTES_SCHEMA,(err)=>{
        if(err){
        	console.log(err);
        	process.exit(1);
        }        
    });

    bd.run(VOTOS_SCHEMA,(err)=>{
        if(err){
        	console.log(err);
        	process.exit(1);
        }
    });

    bd.run(ADD_PARTICIPANTES,(err)=>{
        if (err){
        	console.log(err);
        	process.exit(1);
        }
    });

});

process.on('SIGINT',()=>{

    bd.close(()=>{
        if (err){
					console.log('bd fechado');
					process.exit(0);
				}
    });

});


