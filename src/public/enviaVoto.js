
function participanteClicado(nome){

    console.log(nome);
    const corpo = document.getElementById('body');

    const myHeaders = new Headers({ 'Content-type': 'application/json' });
   
    const estruturaRequisicao = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({nome: value})
    }

    fetch(`http://localhost:5000/votos`,estruturaRequisicao)

    .then(response =>response.text())
    
    .then(data=>{
        corpo.textContent = data;
    })   
    .catch(err=>err);

}









