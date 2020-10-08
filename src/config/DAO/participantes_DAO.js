
class ParticipantesDao {
	constructor(bd) {
		this._bd = bd;
	}
//esse método é aplicado na gestão de participantes (feature a ser desenvolvida futuramente)
	visualizaParticipantes() {

		return new Promise((resolve, reject) => {
			this._bd.all(
				`SELECT * FROM participantes`,
				(err, rows) => {
					if (err) {
						return reject(err);
					}
					return resolve(rows);
				}
			)
		});
	}
//seleciona na tabela de participantes, os que farao parte da disputa de acordo com seu id
	enviaParticipantes() {

		return new Promise((resolve, reject) => {

			this._bd.all(`SELECT * FROM participantes where id in (1,16)`, (err, row) => {
				if (err) {
					return reject(`Não foi possivel enviar participantes ${err}`);
				}
				return resolve(row);
			})
		})
	}

}

module.exports = ParticipantesDao;