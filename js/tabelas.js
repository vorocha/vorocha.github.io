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
		tableElement += "<td>" + tableObj[i].fRp + "</td>";
		tableElement += "<td>" + tableObj[i].Fac + "</td>";
		tableElement += "<td>" + tableObj[i].Facp + "</td>";
		tableElement += "</tr>";
	}
	
	tableElement += "</tbody>";
	tableElement += "</table>";
	
	document.getElementById('resultTable').innerHTML = tableElement;
}