class Resultado_DAO {
    constructor(db){
        this._db = db
    }
    buscarResultado(){
        return new Promise((resolve,reject)=>{
        this._db.all(`SELECT total_votos_1, total_votos_2 FROM votacao`, (err, rows)=>{
            if (err){
                reject(`votacao não encontrada ${err}`) /* tratando o erro */
            }
            resolve(rows)
        })
        })
    }
}
module.exports = Resultado_DAO;