function parcialVotos(resultado, participante) {
  return`<!doctype html>
  <html>
  <header>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  
    <title>Resultado</title>
    <style>
    .container {
      display: flex;
      justify-content: center;
    }
   
    .rounded-bottom {
      border-width: 6px;
    }
    </style>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">google.charts.load('current', {'packages':['corechart']});google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Effort', 'Amount given'],
      ['Rafa Kalimann', ${resultado[0].total_votos_2}],
      ['Babu Santana', ${resultado[0].total_votos_1}]
    ]);

    var options = {
      pieHole: 0.5,
      pieSliceTextStyle: {
        color: 'black',
      },
      legend: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
  }
</script>

  </header>
  <body id="body">
  <header class="card-header text-center border-secondary rounded-bottom">    
  <div class="container">
    <div class="row">
      <div class="col-sm-2 ">
        <img src = "static/imagens/mascote.jpeg" width="40" height="40" class="d-inline-block " alt="">
      </div>
      <div class="col-sm-10">
        <h2>Parcial de votos ?</h2>
      </div>
    </div>
  </div>
</header>
    <div class="container"> 
      <div class="row">
        <div class="col-sm-4">
          <h5 class="text-center">${participante[0].nome}</h5>
          <img src = "static/imagens/babu.jpg"  class="img-fluid" alt="Responsive image ">
        </div>
        <div class="col-sm-4">
            <div id="donut_single" style=" width:235px; margin-right: 28px;
            margin-bottom: 25px;
            padding: 10px;"></div>
        </div>
        <div class="col-sm-4">
        <h5 class="text-center">${participante[1].nome}</h5>
        <img src = "static/imagens/rafa.jpg"  class="img-fluid" alt="Responsive image ">
      </div>
        
      </div>
    </div>
      <div class="d-flex justify-content-center"> 
        <div class="row">
          <div class="col-sm-12 ">
            <a class="btn btn-primary"" href="/">Vote novamente</a>          
          </div>
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
<script src="/static/selectImage.js"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
  integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
  crossorigin="anonymous"></script>
</body>

</html>
  `
  /*
  let participanteVoto= '';
  participanteVotacao.forEach( participante => {  
    participanteVoto += 
    `
  `
}); 
  return`
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  
    <title>Resultado</title>
   
  </head>
      <div class="col-4">
        <div class="col-2">
          <div class="col-sm">
            <input type="radio" aria-label="Checkbox for following text input" id="input${participante.id}" name ="votacao" value ="${participante.id}" onclick="participanteClicado(value)"/>
            <h5 class="text-center">${participante.nome}</h5>
            <img name = "votacao" class="img-fluid" alt="Responsive image "   value = "${participante.id}" src="${participante.url}" id ="participante${participante.id}"class="mr-3" alt="..." onclick="selectImage(${participante.id})">
            </div>
        </div>
      </div>
      
       
`*/
      ;
  }


  
  module.exports = parcialVotos;