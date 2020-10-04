const participantesDao = require('../../config/DAO/participantes_DAO');
const bd = require('../../config/bd/banco_de_dados');
const paginaParticipantes = require('../view/interface_participantes');


class ParticipantesController {

  static mostraParticipante() {

    return ((req, res) => {

      const instanciaParticipantes = new participantesDao(bd);  
      instanciaParticipantes.visualizaParticipantes()
        .then((row) => {
          if (row.length > 0) {
            res.send(paginaParticipantes(row));            
          }
          else res.send(paginaParticipantes());
        })
        .catch((err) => console.log(err));
    });
  }
}

module.exports = ParticipantesController;

