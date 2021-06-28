var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['cfq', 'noop', 'deadline', 'fiops', 'tripndroid', 'maple'],
        datasets: [{
            label: 'Sequential Read',
            data: [644.92, 650.96, 640.97, 632.03, 505.99, 637.79, ],
            backgroundColor: [
                '#ef9a9a', '#90caf9', '#ffcc80',
            ],

        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return value + " MB/S";
                    }
                }
            }
        }
    }
});