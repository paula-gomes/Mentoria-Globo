function charts(resultado){
    console.log("grafico resultado",resultado);
    var ctx = document.getElementById("myChart");
     return new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['OK', 'WARNING'],
        datasets: [{
        label: 'Votos',
        data: [resultado.total_votos_1, resultado.total_votos_2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
        }]
    },
    options: {
        //cutoutPercentage: 40,
        responsive: false,

    }
    });
}
