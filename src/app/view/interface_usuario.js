
function paginaUsuario(participanteVotacao) {

  let participanteVoto= '';
  participanteVotacao.forEach( participante => {
      
    participanteVoto += 
    `
    <style>
    .container {
      display: flex;
      justify-content: center;
    }
    img {
      border-radius: 10%
    }
    input[type="radio"] {
      visibility: hidden;
  }
 
    .checked {
      border: 6px solid #d39e00;
    }
    .rounded-bottom {
      border-width: 6px;
    }
    </style>

        <div class="col-sm">
          <input type="radio" aria-label="Checkbox for following text input" id="input${participante.id}" name ="votacao" value ="${participante.id}" onclick="participanteClicado(value)"/>
          <h5 class="text-center">${participante.nome}</h5>
          <img name = "votacao" class="img-fluid" alt="Responsive image "   value = "${participante.id}" src="${participante.url}" id ="participante${participante.id}"class="mr-3" alt="..." onclick="selectImage(${participante.id})">
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
    <header class="card-header text-center border-secondary rounded-bottom">    
      <div class="container">
        <div class="row">
          <div class="col-sm-1">
            <img src = "static/imagens/mascote.jpeg" width="40" height="40" class="d-inline-block " alt="">
          </div>
          <div class="col-sm-11">
            <h2>QUEM DEVE SER ELIMINADO ?</h2>
          </div>
        </div>
      </div>
    </header>
    <div class="card-body">
      <form method="POST" action="/votos">
        <input type="hidden" name="_method" value="PUT">
            <div class="container"> 
              <div class="row">
                ${participanteVoto}
              </div> 
            </div> 
          </div>                   
          <div class="d-flex justify-content-center"> 
            <div class="row">
              <div class="col-sm-12 ">
                <button type="submit" class="btn btn-primary" >Envie seu voto agora</button>                
              </div>
            </div>
          </div>
        </form>  
      </div>  
    </div>   
    
  
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"></script>
    <script src="/static/enviaVoto.js"></script>
    <script src="/static/selectImage.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"></script>
  </body>
  </html>`
    ;
}

module.exports = paginaUsuario;