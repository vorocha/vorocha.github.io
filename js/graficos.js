function drawIntervalChart(inputs, tableObj, varName){
	
	var data = inputs;
	var numItems = data.length;
	var ticksPos = [];

	ticksPos.push(tableObj[0].min);
	for(let obj of tableObj){
		ticksPos.push(obj.max);
	}
	
	Highcharts.chart('resultChart', {
		title: {
			text: 'Histograma',
			style: {
				fontWeight: 'bold',
				fontSize: "12px"
			}
		},
		legend: {
			enabled: false
		},
		xAxis: [{
			min: tableObj[0].min - 2,
			max: tableObj[tableObj.length - 1].max + 2,
			startOnTick: false,
			tickPositions: ticksPos
		}, {
			title: { text: varName },
			alignTicks: false,
			opposite: false,
			}],
		yAxis: [{
			title: { text: '' },
			opposite: true,
			visible: false
		}, {
			title: { text: 'Percentual' },
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
			binWidth: tableObj[0].max - tableObj[0].min,
			pointPadding: 0,
			borderWidth: 0,
			groupPadding: 0,
			shadow: false,
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
}