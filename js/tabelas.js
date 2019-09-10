function drawIntervalTable(tableObj, varName){
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>#</th>";
	tableElement += "<th scope='col'>" + varName + "</th>";
	tableElement += "<th scope='col'>fi</th>";
	tableElement += "<th scope='col'>fR%</th>";
	tableElement += "<th scope='col'>Fac</th>";
	tableElement += "<th scope='col'>Fac%</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
	
	for(let i = 0; i < tableObj.length; i++){
		tableElement += "<tr>";
		tableElement += "<th scope='row'>" + (i+1) +"</th>";
		tableElement += "<td>" + tableObj[i].min + "|---" + tableObj[i].max +"</td>";
		tableElement += "<td>" + tableObj[i].qtd + "</td>";
		tableElement += "<td>" + tableObj[i].fRp + "%</td>";
		tableElement += "<td>" + tableObj[i].Fac + "</td>";
		tableElement += "<td>" + tableObj[i].Facp + "%</td>";
		tableElement += "</tr>";
	}
	
	tableElement += "</tbody>";
	tableElement += "</table>";
	
	document.getElementById('resultTable').innerHTML = tableElement;
}

function drawSimpleNumberTable(tableObj, varName){
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>#</th>";
	tableElement += "<th scope='col'>" + varName + "</th>";
	tableElement += "<th scope='col'>fi</th>";
	tableElement += "<th scope='col'>fR%</th>";
	tableElement += "<th scope='col'>Fac</th>";
	tableElement += "<th scope='col'>Fac%</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
	
	for(let i = 0; i < tableObj.length; i++){
		tableElement += "<tr>";
		tableElement += "<th scope='row'>" + (i+1) +"</th>";
		tableElement += "<td>" + tableObj[i].name +"</td>";
		tableElement += "<td>" + tableObj[i].qtd + "</td>";
		tableElement += "<td>" + tableObj[i].fRp + "%</td>";
		tableElement += "<td>" + tableObj[i].Fac + "</td>";
		tableElement += "<td>" + tableObj[i].Facp + "%</td>";
		tableElement += "</tr>";
	}
	
	tableElement += "</tbody>";
	tableElement += "</table>";
	
	document.getElementById('resultTable').innerHTML = tableElement;
}

function drawSimpleTextTable(tableObj, varName){
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>#</th>";
	tableElement += "<th scope='col'></th>";
	tableElement += "<th scope='col'>" + varName + "</th>";
	tableElement += "<th scope='col'>fi</th>";
	tableElement += "<th scope='col'>fR%</th>";
	tableElement += "<th scope='col'>Fac</th>";
	tableElement += "<th scope='col'>Fac%</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
	
	for(let i = 0; i < tableObj.length; i++){
		tableElement += "<tr>";
		tableElement += "<th scope='row'>" + (i+1) +"</th>";
		if(i == 0){
			tableElement += "<td><span><img class='btn_table_text' src='img/btn_inv.png' /><img class='btn_table_text' src='img/btn_down_arrow.png' /></span></td>";
		} else if(i == tableObj.length - 1){
			tableElement += "<td><span><img class='btn_table_text' src='img/btn_up_arrow.png' /><img class='btn_table_text' src='img/btn_inv.png' /></span></td>";
		} else {
			tableElement += "<td><span><img class='btn_table_text' src='img/btn_up_arrow.png' /><img class='btn_table_text' src='img/btn_down_arrow.png' /></span></td>";
		}
		tableElement += "<td>" + tableObj[i].name +"</td>";
		tableElement += "<td>" + tableObj[i].qtd + "</td>";
		tableElement += "<td>" + tableObj[i].fRp + "%</td>";
		tableElement += "<td>" + tableObj[i].Fac + "</td>";
		tableElement += "<td>" + tableObj[i].Facp + "%</td>";
		tableElement += "</tr>";
	}
	
	tableElement += "</tbody>";
	tableElement += "</table>";
	
	document.getElementById('resultTable').innerHTML = tableElement;
}

function drawCentralTendencyTable(centralTendency){
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>Moda</th>";
	tableElement += "<th scope='col'>Média</th>";
	tableElement += "<th scope='col'>Mediana</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
		tableElement += "<tr>";
		tableElement += "<td>" + centralTendency.moda +"</td>";
		tableElement += "<td>" + centralTendency.media +"</td>";
		tableElement += "<td>" + centralTendency.mediana +"</td>";
		tableElement += "</tr>";
	tableElement += "</tbody>";
	tableElement += "</table>";
		
	document.getElementById('centralTendency').innerHTML = tableElement;
}