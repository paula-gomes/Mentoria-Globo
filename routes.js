const enviaVotos = require('../Mentoria-Globo/src/public/contaVotos');

module.exports = (app) =>{

    app.get('/', (req,res) => {
        res.sendFile(__dirname + "/view/index.html");
        console.log(__dirname);
    });

    app.post('/votos',(req,res)=>{
        res.send(enviaVotos());
    });
};

