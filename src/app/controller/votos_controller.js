const votoDao= require ('../../config/DAO/inserir_votos_DAO');
const bd = require('./../../config/bd/banco_de_dados');
const parcialVotos = require('../view/interface_parcial_votos');
const ParticipantesDao = require('../../config/DAO/participantes_DAO');
const ResultadoDao = require('../../config/DAO/resultado_DAO');

class VotosController { 
    
    static adicionaVoto () {

        return ((req,res) => {
            const instanciaVoto = new votoDao(bd);
            instanciaVoto.adicionaVoto(req.body.votacao)
            .then(()=>{
                const instanciaParticipantes = new ParticipantesDao(bd);
                const instanciaResultado = new ResultadoDao(bd)
                res.send(parcialVotos(instanciaResultado.buscarResultado(),instanciaParticipantes.enviaParticipantes()))
            })
            .catch(err=> console.log(err));
        });
    }
}
module.exports = VotosController;
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    /*static adicionaVotoParticipanteUm (){

        return ((req,res) =>{

            const votoInstancia = new votoDao(bd);
            votoInstancia.adicionaParticipante(req.body.nome, req.body.url)
            .then(()=> res.send('Participante adicionado'))
            .catch(err=> console.log(err));

        });
    }

    static adicionaVoto(){

        return ((req,res)=>{

            const votoInstancia = new votoDao(bd);
            votoInstancia.adicionaVoto(req.body.id_participante)
            .then(()=>res.send('Voto adicionado'))
            .catch(err=> console.log(err));
        });
    }   
    
    
}*/


