function drawIntervalTable(tableObj, varName){
	let tableElement;''
	tableElement = "<div style='text-align: right;'><span style='cursor: pointer;' onclick='switchSimple(true);'><img src='img/btn_switch_simple_interval.png' width='26'/>Discreta</span></div>";
	tableElement += "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
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
	tableElement = "<div style='text-align: right;'><span style='cursor: pointer;' onclick='switchSimple(false);'><img src='img/btn_switch_simple_interval.png' width='26'/>Contínua</span></div>";
	tableElement += "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
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
		if(i == 0){
			tableElement += "<td><span><img class='btn_table_text inv' src='img/btn_inv.png' /><img class='btn_table_text' src='img/btn_down_arrow.png' onclick='reorderDescriptive("+i+","+(i+1)+");'/></span></td>";
		} else if(i == tableObj.length - 1){
			tableElement += "<td><span><img class='btn_table_text' src='img/btn_up_arrow.png' onclick='reorderDescriptive("+i+","+(i-1)+");' /><img class='btn_table_text inv' src='img/btn_inv.png' /></span></td>";
		} else {
			tableElement += "<td><span><img class='btn_table_text' src='img/btn_up_arrow.png' onclick='reorderDescriptive("+i+","+(i-1)+");' /><img class='btn_table_text' src='img/btn_down_arrow.png' onclick='reorderDescriptive("+i+","+(i+1)+");' /></span></td>";
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

function drawSeparatrizDiv(){
	let divElement;
	divElement = "<form>";
	divElement += "<fieldset class='border p-2' style='height: 120px;'><legend class='w-auto'>Medidas Separatrizes</legend>";
	divElement += "<div class='form-group input-group'>";
	divElement += "<select id='separatrizSelect' class='form-control-sm col-3' onchange='callSeparatriz();'>";
	divElement += "<option value='0' >Separatrizes:</option>";
	divElement += "<option value='4' >Quartil</option>";
	divElement += "<option value='5' >Quintil</option>";
	divElement += "<option value='10' >Decil</option>";
	divElement += "<option value='100' >Porcentil</option>";
	divElement += "</select>";
			
	divElement += "<input id='rangeInput' type='text' style='display: none;'/>";
			
	divElement += "<span id='sepTipo'></span>";
	divElement += "<span id='sepValor'></span>";
	divElement += "<span id='sepResult'></span>";
	divElement += "</div>";
	divElement += "</fieldset></form>";
	
	document.getElementById('separatriz').innerHTML = divElement;
}
function drawDesvioPadraoTable(desvioPadrao, media){
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>Desvio Padrão</th>";
	tableElement += "<th scope='col'>Coeficiente de Variação</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
		tableElement += "<tr>";
		tableElement += "<td>" + desvioPadrao +"</td>";
		tableElement += "<td>" + Math.round((desvioPadrao / media) * 10000) / 100 +"%</td>";
		tableElement += "</tr>";
	tableElement += "</tbody>";
	tableElement += "</table>";
		
	document.getElementById('desvioPadrao').innerHTML = tableElement;
}