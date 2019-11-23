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
	let tableElement = "";
	if(tableObj.length > 7){
		tableElement = "<div style='text-align: right;'><span style='cursor: pointer;' onclick='switchSimple(false);'><img src='img/btn_switch_simple_interval.png' width='26'/>Contínua</span></div>";
	}
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
	divElement += "<fieldset class='border p-2' style='height: auto !important;'><legend class='w-auto'>Medidas Separatrizes</legend>";
	divElement += "<div class='form-group input-group'>";
	divElement += "<select id='separatrizSelect' class='form-control-sm col-3' onchange='callSeparatriz();'>";
	divElement += "<option value='0' >Separatrizes:</option>";
	divElement += "<option value='4' >Quartil</option>";
	divElement += "<option value='5' >Quintil</option>";
	divElement += "<option value='10' >Decil</option>";
	divElement += "<option value='100' >Porcentil</option>";
	divElement += "</select>";
	divElement += "<span id='sepTipo'></span>";
	divElement += "<span id='sepValor'></span>";
	divElement += "<span id='sepResult'></span>";		
	divElement += "<input id='rangeInput' type='text' style='display: none;'/>";
			
	
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
function drawBinomialTable(propabilidade, media, desvio){
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>Probabilidade</th>";
	tableElement += "<th scope='col'>Média</th>";
	tableElement += "<th scope='col'>Desvio Padrão</th>";
	tableElement += "<th scope='col'>Coeficiente de Variação</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
		tableElement += "<tr>";
		tableElement += "<td>" + propabilidade +"%</td>";
		tableElement += "<td>" + media +"</td>";
		tableElement += "<td>" + desvio +"</td>";
		tableElement += "<td>" + (desvio*media)*100 +"%</td>";
		tableElement += "</tr>";
	tableElement += "</tbody>";
	tableElement += "</table>";
		
	document.getElementById('resultBinomial').innerHTML = tableElement;
}
function drawNormalTable(propabilidade){
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>Probabilidade</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
		tableElement += "<tr>";
		tableElement += "<td>" + propabilidade +"%</td>";
		tableElement += "</tr>";
	tableElement += "</tbody>";
	tableElement += "</table>";
		
	document.getElementById('resultNormal').innerHTML = tableElement;
}
function drawUniformeTable(propabilidade, media, desvio, variacao){
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>Probabilidade</th>";
	tableElement += "<th scope='col'>Média</th>";
	tableElement += "<th scope='col'>Desvio Padrão</th>";
	tableElement += "<th scope='col'>Coeficiente de Variação</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
		tableElement += "<tr>";
		tableElement += "<td>" + propabilidade +"%</td>";
		tableElement += "<td>" + media +"</td>";
		tableElement += "<td>" + desvio +"</td>";
		tableElement += "<td>" + variacao +"%</td>";
		tableElement += "</tr>";
	tableElement += "</tbody>";
	tableElement += "</table>";
		
	document.getElementById('resultUniforme').innerHTML = tableElement;
}
function drawCorrelacaoTable(correlacao, a, b){
	let nivel;
	if(correlacao >= 0 && correlacao < 30){
		nivel = "(Inexistente - Fraca)";
	} else if(correlacao >= 30 && correlacao < 60){
		nivel = "(Fraca - Média)";
	} else if(correlacao >= 60 && correlacao <= 100){
		nivel = "(Média - Forte)";
	}
	let tableElement;
	tableElement = "<table class='table table-hover table-dark'>";
	tableElement += "<thead>";
	tableElement += "<tr>";
	tableElement += "<th scope='col'>Correlação</th>";
	tableElement += "<th scope='col'>Equação</th>";
	tableElement += "</tr>";
	tableElement += "</thead>";
	tableElement += "<tbody>";
		tableElement += "<tr>";
		tableElement += "<td>" + correlacao +"% "+ nivel +"</td>";
		tableElement += "<td>y = " + a +".x + "+ b +"</td>";
		tableElement += "</tr>";
	tableElement += "</tbody>";
	tableElement += "</table>";
		
	document.getElementById('correlacaoTable').innerHTML = tableElement;
}
function drawNewPointDiv(){
	let divElement;
	divElement = "<form>";
	divElement += "<fieldset class='border p-2 col' style='height: auto !important;'><legend class='w-auto'>Ponto Futuro</legend>";
	divElement += "<div class='form-group input-group'>";
	divElement += "<input type='text' class='form-control col' id='newXInput' onkeyup='newPointComplete(this.value, 1, a, b);' placeholder='X:'></input>";
	divElement += "<input type='text' class='form-control col' id='newYInput' onkeyup='newPointComplete(this.value, 2, a, b);' placeholder='Y:'></input>";
	divElement += "</div>";
	divElement += "</fieldset></form><br/>";
	
	document.getElementById('newPoint').innerHTML = divElement;
}