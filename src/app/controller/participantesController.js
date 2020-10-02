const participantesDao = require('../../config/DAO/participantesDao');
const bd = require('../../config/db/create_db');
const paginaParticipantes = require('../view/interfaceParticipantes');


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

