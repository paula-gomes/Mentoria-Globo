
function participanteClicado(value){

    const corpo = document.getElementById('body');

    const myHeaders = new Headers({ 'Content-type': 'application/json' });
   
    const estruturaRequisicao = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({nome: value})
    }

    fetch(`http://localhost:3000/votos`,estruturaRequisicao)

    .then(response =>response.text())
    
    .then(data=>{
        corpo.textContent = data;
    })
    .catch(err=>err);

}








