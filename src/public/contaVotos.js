let form = document.getElementById('votacao');

form.addEventListener('submit', (e)=>{

        e.preventDefault();
        let participanteUm = document.getElementById('participante1').value;
        let participanteDois = document.getElementById('participante2').value;
        const myHeaders = new Headers({ 'Content-type': 'application/json' });

        const estruturaRequisicao = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({nomeUm: participanteUm, nomeDois: participanteDois})
        }
        fetch(`http://localhost:3000/votos`,estruturaRequisicao)
        .then((res)=>res.text())     
        .then (data => console.log(data))
        .catch(err=>console.log(err));

});

/*function contaVotos(voto) {

    if (voto == "participante1") {

        const myHeaders = new Headers({ 'Content-type': 'application/json' });

        const estruturaRequisicao = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({nome: voto})
        }
        fetch(`http://localhost:3000/votos`,estruturaRequisicao)
        .then((resposta.body.nome))
        .catch(err=>console.log(err));
    };
 
};



    if (voto == "participante1") {
        console.log(voto);
    fetch(`http://localhost:3000/:${voto}`, { method: "POST" })
    .then(() => 
    .catch(err => console.log(err));
    }
    else if (voto == "participante2") {
        console.log("participante2")
    };
    return "oi fabinho";*/










