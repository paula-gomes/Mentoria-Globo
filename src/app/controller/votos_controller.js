const votoDao= require ('../../config/DAO/inserir_votos_DAO');
const bd = require('./../../config/bd/banco_de_dados');
const parcialVotos = require('../view/interface_parcial_votos');
const ResultadoDao = require('../../config/DAO/resultado_DAO');

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
						 
					console.log(resultado);
					res.send(parcialVotos(resultado))
					})
					.catch(err=> console.log(err));
			})
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


