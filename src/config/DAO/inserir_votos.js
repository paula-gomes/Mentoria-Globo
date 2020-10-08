
class VotosDao {

	constructor(bd) {
		this._bd = bd;
	}
	// insere no bd os votos de cada um dos participantes escolhidos 
	adicionaVotoParticipanteUm() {

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


}
