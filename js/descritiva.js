//##############################################   ANGULAR
var app = angular.module('spFatec', []);

app.controller('MainCtrl', function($scope) {

});

//##############################################   MANUAL
let input1 = ['2000', 3000, 4000, 4000, 3000, 2000, 5000, 2000, 3000, 3000, 3000, 2000, 4000, 4000, 3000, 5000, 4000, 3000, 4000, 3000];
let input2 = ['EF', 'EF', 'EF', 'EF', 'EM', 'EM', 'EM', 'EM', 'ES', 'PG', 'PG', 'ES', 'ES', 'ES', 'PG', 'PG', 'ES', 'ES', 'ES', 'ES', 'EM', 'EM', 'EM', 'EM', 'EM', 'EF', 'EF', 'PG', 'PG', 'ES'];
let input3 = [37, 34, 20, 43, 37, 55, 27, 37, 23, 46, 56, 43, 60, 32, 27, 60, 53, 51, 45, 45, 28, 41, 38, 38, 56, 65, 63, 23, 56, 34, 27, 34, 38, 30, 29, 47, 47, 45, 42, 55, 50, 35];
let input4 = ['Preta', 'Rosa', 'Rosa', 'Branca', 'Rosa', 'Azul', 'Amarela', 'Preta', 'Branca', 'Rosa', 'Preta', 'Amarela', 'Rosa', 'Branca', 'Branca', 'Azul', 'Rosa', 'Amarela', 'Rosa', 'Branca', 'Branca', 'Azul', 'Branca', 'Branca', 'Branca', 'Branca', 'Azul', 'Branca', 'Rosa', 'Preta'];

function varClass(inputs) { //Função para idendificar as variaveis
	inputs.sort();
	let aux = [];
	let results;
	
	for(let i = 0; i < inputs.length; i++){
		aux[i] = isNaN(inputs[i]) ? 0 : 1;
	}
	
	if(aux.indexOf(0) == 0 || aux.indexOf(1) == -1){
		console.log("FULL TEXT");
		console.log("SIMPLES")
		results = varQtd(inputs);
		console.log(results);
	} else if(aux.indexOf(0) == -1 || aux.indexOf(1) == 0){
		console.log("FULL NUMBER");
		for(let i = 0; i < inputs.length; i++){
			inputs[i] = parseFloat(inputs[i]);
		}
		results = varQtd(inputs);
		if(results.length > 6){
			console.log("INTERVALOS")
			varIntervals(results, inputs);
		} else {
			console.log("SIMPLES");
			results = varQtd(inputs);
			console.log(results);
		}
	} else {
		console.log("ERROR");
	}
}

function varQtd(inputs){
	let vetQtd = [];
	let findFlag = false, findPos = -1;
	
	for(let i = 0; i < inputs.length; i++){
		for(let j = 0; j < vetQtd.length; j++){
			if(inputs[i] == vetQtd[j].name){
				findFlag = true;
				findPos = j;
			}
		}
		if(findFlag){			
			vetQtd[findPos].qtd += 1;
			findFlag = false;
		} else {
			let obj = {};
			obj.name = inputs[i];
			obj.qtd = 1;
			vetQtd.push(obj);
		}		
	}
	return vetQtd;
}

function varIntervals(vetQtd, inputs){
	console.log(vetQtd);
	let minAll = vetQtd[0].name;
	let maxAll = vetQtd[vetQtd.length-1].name
	let At = maxAll - minAll;
	console.log(At);
	
	let K = Math.floor(Math.sqrt(inputs.length));
	let vetK = [K-1, K, K+1];
	console.log(vetK);
	
	for(let i = At+1; i != 0; i++){
		if(i%vetK[0] == 0){
			At = i;
			K = vetK[0];
			break;
		} else if(i%vetK[1] == 0){
			At = i;
			K = vetK[1];
			break;
		} else if(i%vetK[2] == 0){
			At = i;
			K = vetK[2];
			break;
		}
	}
	console.log(At);
	console.log(K);
	let Ic = At/K;
	console.log(Ic);
	
	let vetIntervals = [];
	let minIntervals = minAll;
	let maxIntervals = minAll + Ic;
	for(let i = 0; i < K; i++){		
		let obj = {min: minIntervals, max: maxIntervals, qtd: 0};
		for(let j = 0; j < vetQtd.length; j++){
			if(vetQtd[j].name >= obj.min && vetQtd[j].name < obj.max){
				obj.qtd += vetQtd[j].qtd;
			}			
		}
		vetIntervals.push(obj);
		minIntervals = maxIntervals;
		maxIntervals = minIntervals + Ic;
	}
	console.log(vetIntervals);
}


//##############################################   UPLOAD
function handleFiles(files) {
	// Arquivo suportado?
	if (window.FileReader) {
		getAsText(files[0]);
	} else {
		alert('Leitura de Arquivo não disponível');
	}
}

function getAsText(fileToRead) {
	let reader = new FileReader();
	reader.onload = loadHandler;
	// Retorna possiveis erros
	reader.onerror = errorHandler;
	// Traz o arquivo para leitura  
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	let csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
	let allTextLines = csv.split(/\r\n|\n/);
	let lines = [];
	while (allTextLines.length) {
		lines.push(allTextLines.shift().split(','));
	}
	document.write(lines);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}
