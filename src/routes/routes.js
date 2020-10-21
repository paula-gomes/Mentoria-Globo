const paginaUsuario = require ('../app/view/interface_usuario');
const paginaParticipantes = require('../app/view/interface_participantes');
const participantesController = require('../app/controller/participantes_controller');
const votosController = require ('../app/controller/votos_controller');

module.exports = (app) =>{

    //rota para pagina de votacao//
    app.get('/', participantesController.enviaParticipantes());

    //rota para pagina com todos os participantes//
    app.get('/participantes',participantesController.mostraParticipante());

    //rota para enviar o participantes que formara o paredao(que ainda tera seu metodo desenvolvido)
    app.get('/participantes/:id',participantesController.mostraParticipante()); 
    
    app.get('/votos', votosController.pegaResultado());
   /* app.get('/votos', (req, resp)=>{
        resp.send('/static/porcetagem.html');
    });*/

    app.put('/votos', votosController.adicionaVoto());
}
    
    
    




