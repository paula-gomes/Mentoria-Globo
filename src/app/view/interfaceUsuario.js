const paginaUsuario =
`<!doctype html>
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
      <div class="d-flex justify-content-center"> 
          <h1>Paredão BBB20</h1>
      </div>
      <div class="d-flex justify-content-center"> 
        <div class="row">
          <div class="col-6">
            <img src="/static/assets/rafa.jpg" class="mr-3" alt="...">
            <div class="col-2">
              <h5 class="mt-0 mb-1">Rafa</h5>
              <input type="checkbox" aria-label="Checkbox for following text input" id="participante1" name ="participante1" value ="participante1" onclick="participanteClicado(value)" >
            </div>
          </div>
          <div class="col-6">
            <img src="/static/assets/babu.jpg" class="mr-3" alt="...">
            <div class="col-2">
              <h5 class="mt-0 mb-1">Babu</h5>
              <input type="checkbox" aria-label="Checkbox for following text input" id="participante2"name ="participante2" value ="participante2" onclick="participanteClicado(value)">  
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
module.exports=paginaUsuario;