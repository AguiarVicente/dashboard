var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [{
            label: 'Novos usuários',
            backgroundColor: 'rgb(255, 99, 132)',
            maxBarThickness: 30,
            borderColor: 'rgb(255, 99, 132)',
            data: [2, 10, 5, 7, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
