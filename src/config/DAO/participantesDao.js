
class ParticipantesDao{
	constructor(bd) {
		this._bd = bd;
	}

	visualizaParticipantes(){

		return new Promise((resolve, reject) => {
			this._bd.all(
				`SELECT * FROM participantes`,
				(err, rows) => {
					if (err) {
					return reject('Não é possivel ver participantes');
					
					}
					return resolve(rows);
									
				}
			)
		});
	}	
}

module.exports = ParticipantesDao;