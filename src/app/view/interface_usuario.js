
function paginaUsuario(participanteVotacao) {

  let dadosParticipanteUm = '';
  let dadosParticipanteDois = '';
  let participanteVoto= '';
  console.log(participanteVotacao);
  //if(participanteVotacao.id == 1) {

  participanteVotacao.forEach( participante => {
      
    participanteVoto += 
    `
    <style>
      input[type="radio"] {
        visibility: hidden;       
      }
      label:hover, label:active {
        display: block;
        border: 4px solid #fd7e14;;
        width: flex;
        float: left;
      }
      input[type="radio"]:checked+label {
        border-color: #ccf;
      }
      img{
        width: 600px;
      }

    </style>
      <div class="col-6">
        <div class="col-2">
          <label for="participante1">
            <h5 class="center">${participante.nome}</h5>
            <img src="${participante.url}" class="mr-3" alt="...">
          </label>
          <input type="radio" aria-label="Checkbox for following text input" id="participante1" name ="votacao" value ="participante1" onclick="participanteClicado(value)" />
          <p></p>
        </div>
      </div>`
}); 

  return `<!doctype html>
  <html>

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <title>Votação BBB20</title>
  </head>

  <body id="body">
    <div class="card text-center">    
      <div class="card-header">    
        <h1>Quem deve ser eliminado ?</h1>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-center"> 
          <div class="row">
            ${participanteVoto}
          </div>            
        </div>
        <div class="d-flex justify-content-center"> 
          <div class="row">
            <div class="col-12">
              <button type="button" class="btn btn-primary">Envie seu voto agora</button>
            </div>
          </div>
        </div>  
      </div>  
    </div>   
    
  
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"></script>
    <script src="/static/enviaVoto.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"></script>
  </body>

  </html>`
    ;
}

module.exports = paginaUsuario;