
class VotosDao {

    constructor(bd) {
        this._bd = bd;
    }

    adicionaParticipante(nome, url) {

        return new Promise((resolve, reject) => {

            this._bd.run(
                `INSERT INTO participantes (nome,url) VALUES (?,?)`,
                [nome, url],
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

    adicionaVoto(id_participante){

        return new Promise((resolve, reject) => {

            this._bd.run(
                `INSERT INTO votos (id_participante) VALUE (?)`,
                [id_participante],
                (err) => {
                    if (err) {
                        console.log(err)
                        return reject('Não foi possivel add voto')
                    }
                    return resolve();

                }
            );

        });

    };

    
}
