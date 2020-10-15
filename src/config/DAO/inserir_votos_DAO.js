const VotosController = require('../../app/controller/votos_controller');
const parcialView = require('../../app/view/interface_parcial_votos');
//const bd = require ('../bd/banco_de_dados');

class VotosDao {

	constructor(bd) {
		this._bd = bd;
	}
	// insere no bd os votos de cada um dos participantes escolhidos 

	adicionaVoto(id) {
		if (id == 1) {

			return new Promise((resolve, reject) => {
				this._bd.run(`UPDATE votacao SET total_votos_1 =  total_votos_1 + 1`), (err) => {
					if (err) {
						console.log(err)
						return reject('Não foi possivel incrementar voto do participante 1')
					}
					return resolve(parcialView);
				}
			})
		}
		else if (id == 16){

			return new Promise((resolve, reject) => {
				this._bd.run(`UPDATE votacao SET total_votos_2 =  total_votos_2 + 1`), (err) => {
					if (err) {
						console.log(err)
						return reject('Não foi possivel incrementar voto do participantes 2 ')
					}
					return resolve(parcialView);
				}
			})
		}
	}
}

module.exports = VotosDao;


















/*adicionaVotoParticipanteUm() {

	return new Promise((resolve, reject) => {

		this._bd.run(
			`INSERT INTO votacao (id_1,id_2,total_votos_1,total_votos_2) VALUES (1,16,1,0)`,
			(err) => {
				if (err) {
					console.log(err)
					return reject('Não foi possivel add participante')
				}
				return resolve();

			}
		);

	});
}

adicionaVotoParticipanteDois() {

	return new Promise((resolve, reject) => {

		this._bd.run(
			`INSERT INTO votacao (id_1,id_2,total_votos_1,total_votos_2) VALUES (1,16,0,1)`,
			(err) => {
				if (err) {
					console.log(err)
					return reject('Não foi possivel add voto')
				}
				return resolve();

			}
		);

	});
}


}*/
