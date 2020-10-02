const paginaUsuario = require ('../app/view/interfaceUsuario');
const paginaParticipantes = require('../app/view/interfaceParticipantes');
const participantesController = require ('../app/controller/participantesController');

module.exports = (app) =>{

    app.get('/', (req,res) => {
        res.send(paginaUsuario);        
    });

    app.get('/participantes',participantesController.mostraParticipante());
  
    app.post('/votos',(req,res)=>{
        res.send(req.body.nome);
        console.log(req.body.nome);
    });
}
    




