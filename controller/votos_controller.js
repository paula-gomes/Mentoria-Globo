const votoDao= require ('../src/DAO/inserir_votos');
const bd = require('../db/create_db');

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


