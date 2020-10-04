const paginaUsuario = require ('../app/view/interface_usuario');
const paginaParticipantes = require('../app/view/interface_participantes');
const participantesController = require('../app/controller/participantes_controller');

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
    




