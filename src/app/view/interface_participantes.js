

function paginaParticipantes(listaParticipantes) {

  let linhaParticipantes = '';

  listaParticipantes.forEach(participante => {

    linhaParticipantes +=
      `<div id = "container">
        <div id="idParticipante" data-id-part ="${participante.id}">        
        <h3 id="nomeParticipante" data-id-nome ="${participante.nome}">${participante.nome}</h3>
        <img src = "${participante.url}"id="fotoParticipante"></img>               
        <button type = "submit" class="enviar" onclick="enviaParticipante(${participante.nome})"> Enviar</button>
        </div>
      </div>`

  });
  return `
<!doctype html>
  <html>

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <title> Gestao BBB20</title>
  </head>

  <body>
     <p> ${linhaParticipantes}</p>
     
     <script src="/static/escolhe_participantes.js"></script>
     
  </body>

  </html>`
}
module.exports = paginaParticipantes;