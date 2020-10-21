
function parcialVotos(resultado) {

  console.log(resultado[0].total_votos_1);
  return`<!doctype html>
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
  @keyframes donut-chart-fill {
    to { stroke-dasharray: 0 100; }
  }
  body {
    font-size: 16px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #333;  
  }
  
  .svg-item {
    width: 200px;
    height: 200px;
    font-size: 16px;
  }
  .donut-ring {
    stroke: #EBEBEB;
  }
  
  .donut-segment {
    animation: donut-chart-fill 1s reverse ease-in;
    transform-origin: center;
    stroke: #FF6200;
  }
  
  .donut-text {
    font-family: Arial, Helvetica, sans-serif;
    fill: #FF6200;
  }
  
  .donut-label {
    font-size: 0.28em;
    font-weight: 700;
    line-height: 1;
    fill: #000;
    transform: translateY(0.25em);    
  }
  
  .donut-percent {
    font-size: 0.5em;
    fill: #FF6200;
    line-height: 1;
    transform: translateY(0.5em);
  }
  
  </style>
  <html>
  
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  
    <title>Resultado</title>
  </head>
  
  <body id="body">
    <div class="card text-center">    
      <div class="card-header">    
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-center"> 
          <div class="row">
            <div class="col-4">
              <div class="col-2">
                <label for="participante1">
                  <h5 class="center">Rafa Kalimann</h5>
                  <img src="../assets/rafa.jpg" class="mr-3" alt="...">
                </label>
                <input type="radio" aria-label="Checkbox for following text input" id="participante1" name ="votacao" value ="participante1" onclick="participanteClicado(value)" />
                <p></p>
              </div>
            </div>
            <div class="col-4">
              <div class="col-2">
                <div class="svg-item">
                  <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                  <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                  <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
                  <circle class="donut-segment" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="${resultado[0].total_votos_1} ${resultado[0].total_votos_2}" stroke-dashoffset="25"></circle>
                  <g class="donut-text">
                  <text y="50%" transform="translate(0, 2)">
                      <tspan x="50%" text-anchor="middle" class="donut-percent">${resultado[0].total_votos_1} ${resultado[0].total_votos_2}%</tspan>   
                  </text>
                  </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="col-2">
                <label for="participante2">
                  <h5 class="center">Babu Santana</h5>
                  <img src="../assets/babu.jpg" class="mr-3" alt="...">
                </label>
                <input type="radio" aria-label="Checkbox for following text input" id="participante2"name ="votacao" value ="participante2" onclick="participanteClicado(value)"/>  
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
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"></script>
  </body>
  
  </html>`
      ;
  }


  
  module.exports = parcialVotos;