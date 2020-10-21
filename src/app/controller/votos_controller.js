const votoDao= require ('../../config/DAO/inserir_votos_DAO');
const bd = require('./../../config/bd/banco_de_dados');
const pagVotos = require('../view/interface_parcial_votos');
const ResultadoDao = require('../../config/DAO/resultado_DAO');
const ParticipantesDao = require ('../../config/DAO/participantes_DAO');

class VotosController { 
    
    static adicionaVoto(){

        return ((req,res) => {
				const instanciaVoto = new votoDao(bd);
				console.log(req.body.votacao);
				res.redirect('/votos');
				instanciaVoto.adicionaVoto(req.body.votacao)					
            .then(()=> res.redirect('/votos'))    
            .catch(err=> console.log(err));
        });
		}
		static pegaResultado() {

			return ((req,res) => {					
				const instanciaResultado = new ResultadoDao(bd)
				instanciaResultado.buscarResultado()					     
                .then((resultado)=>{ 
                    const instanciaParticipantes = new ParticipantesDao(bd)
                    instanciaParticipantes.enviaParticipantes()
                    .then((participantes)=>
                    res.send(pagVotos(resultado,participantes))
                    )
            	.catch(err=> console.log(err));
            })
        })
	}
}
module.exports = VotosController;