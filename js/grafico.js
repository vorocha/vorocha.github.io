var data = [37, 34, 20, 43, 37, 55, 27, 37, 23, 46, 56, 43, 60, 32, 27, 60, 53, 51, 45, 45, 28, 41, 38, 38, 56, 65, 63, 23, 56, 34, 27, 34, 38, 30, 29, 47, 47, 45, 42, 55, 50, 35];
var numItems = data.length;

Highcharts.chart('container', {
    title: {
        text: 'Title',
        style: {
            fontWeight: 'bold',
            fontSize: "12px"
        }
    },
    legend: {
        enabled: false
    },
    xAxis: [{
        min: 18,
        max: 70,
        startOnTick: false,
        tickPositions: [20, 28, 36, 44, 52, 60, 68]
    }, {
        title: { text: 'Peças' },
        alignTicks: false,
        opposite: false,
        }],


    yAxis: [{
        title: { text: '' },
        opposite: true,
        visible: false
    }, {
        title: { text: 'Percentage' },
        opposite: false,
        labels: {
            formatter: function () {
                var number = ((this.value / numItems) * 100);

                return Highcharts.numberFormat(number, 1) + '%';
            }
        }
    }],

    series: [{
        name: 'Histogram',
        type: 'histogram',
        xAxis: 0,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1,
        binWidth: 8,
        tooltip: {
            pointFormatter: function () {
                var number = ((this.y / numItems) * 100);
                return 'Fac: <b>' + Highcharts.numberFormat(number, 1) + ' %</b>';
            }
        }
    }, {
        name: 'Data',
        type: 'scatter',
        data: data,
        id: 's1',
        marker: {
            radius: 0
        },
        visible: false
        }]
});