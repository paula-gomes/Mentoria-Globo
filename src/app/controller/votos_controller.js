const votoDao= require ('../../config/DAO/inserir_votos');
const bd = require('./../../config/bd/banco_de_dados')
class VotosController {


    static adicionaParticipante (){

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
    
    
}


