function contaVotos(voto) {
    let countUm = 0;
    let countDois = 0;
    if (voto == "participante1") {
        countUm += 1;
    }
    else if (voto == "participante2") {
        countDois += 1;
    }
    return`Votos Participante 1: ${countUm}\n Votos participante 2: ${countDois}`;

};

module.exports= contaVotos;








