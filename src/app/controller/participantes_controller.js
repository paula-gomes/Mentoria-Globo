const participantesDao = require('../../config/DAO/participantes_DAO');
const bd = require('../../config/bd/banco_de_dados');
const paginaParticipantes = require('../view/interface_participantes');
const paginaUsuarios = require('../view/interface_usuario')


class ParticipantesController {

  //metodo que será aplicado na gestao de participantes (feature a ser desenvolvida)
  static mostraParticipante() {

    return ((req, res) => {

      const instanciaParticipantes = new participantesDao(bd);
      instanciaParticipantes.visualizaParticipantes()
        .then((row) => {
          if (row.length > 0) {
            console.log(row)
            res.send(paginaParticipantes(row));
          }
          else res.send(paginaParticipantes());
        })
        .catch((err) => console.log(err));
    });
  }

  //metodo que envia os dados do participantes para a pagina do usuario
  
  static enviaParticipantes() {

    return ((req, res) => {
      const instanciaParticipantes = new participantesDao(bd);
      instanciaParticipantes.enviaParticipantes()
        .then((rows) => res.send(paginaUsuarios(rows)))
        .catch((err) => console.log('Não enviou participante' + err))
    })
  }
 }

module.exports = ParticipantesController;

