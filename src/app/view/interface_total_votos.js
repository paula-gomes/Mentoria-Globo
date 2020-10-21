

function paginaTotalVotos(listaParticipantes) {

    let linhaParticipantes = "";
  
    listaParticipantes.forEach(participante => {
  
      linhaParticipantes +=
        `
      
        <tr class = "text-center">
        <th scope="row">${participante.id}</th>
        <th>${participante.total_votos_1}</th>
        <th scope="row">${participante.nome}</th>
        <th><img src = "${participante.url}"id="fotoParticipante" style = "width: 80px"class="img-fluid" alt="Responsive image"></img></th>
        <th>${participante.nome}@globo.com</th>
        <th>Ator</th>
        <th>Ator</th>

        <th>
          <button name="button" type="button" class="btn btn-primary">Enviar</button>
          <button name="button" type="button" class="btn btn-danger">Deletar</button>
        </th>
        </tr>`
  
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
    <div class= "container">
      <div class="table-responsive-sm">
        <table id = "tabelaParticipantes"class="table table-hover">
          <thead class ="text-center">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Votos</th>
              <th scope="col">Participante</th>
              <th scope="col">Foto</th>
              <th scope="col">Email</th>
              <th scope="col">Estado</th>
              <th scope="col">Profissão</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
              ${linhaParticipantes}
          </tbody>
        </table>
      </div>
      </div>
  
       <script src="/static/escolhe_participantes.js"></script>
       
    </body>
  
    </html>`
  }
  module.exports = paginaTotalVotos;