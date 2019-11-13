function binomial(nAmostra, pSucesso, qFracasso, kEvento){// calcula binomial, inclusive com varios eventos, passados no parametro pseparados por ';'
    if(pSucesso + qFracasso == 1){
		if(kEvento.length > 1){
			let eventos = kEvento.split(";");
			let resultEventos = 0;
			for(e of eventos){
				resultEventos += analiseCombinatoria(nAmostra, e) * Math.pow(pSucesso, e) * Math.pow(qFracasso, nAmostra-e);
			}
			return resultEventos;			
		} else {
			return analiseCombinatoria(nAmostra, kEvento) * Math.pow(pSucesso, kEvento) * Math.pow(qFracasso, nAmostra-kEvento);
		}
    }    
}

function binomialMedia(nAmostra, pSucesso){ //calcula a Média da binomial
	return nAmostra * pSucesso;
}

function binomialDesvio(nAmostra, pSucesso, qFracasso){ //calcula o DP (desvio padrão) da binomial
	return Math.sqrt((nAmostra * pSucesso * qFracasso));
}

function analiseCombinatoria(nAmostra, kEvento){ //função que realiza analise combinatória
    if(kEvento == 0 || nAmostra == kEvento){
        return 1;
    } else if(kEvento == 1){
        return nAmostra;
    } else if(nAmostra >= 0 && kEvento >= 0){
        return fatorial(nAmostra) / (fatorial(kEvento) * (fatorial(nAmostra - kEvento)));
    } else {
        alert("Números negativos em AMOSTRA ou EVENTO");
    }
}

function fatorial(num){ //calcula fatorial de um numero
    if (num == 0){
        return 1;
    } else {
        return (num * fatorial(num -1));
    }
}

function normal(media, desvioPadrao, valores, relacao){ //calcula normal
    let z1, z2, z, areaz1, areaz2, areaz;
		
    for(let i = 0; i < valores.length; i++){
        valores[i] = parseFloat(valores[i]);
    }
	
    if(valores.length > 1){
        z1 = valores[0];
		areaz1 = tabelaZ(roundN(Math.abs( (z1 - media) / desvioPadrao), 2));
        z2 = valores[1];
		areaz2 = tabelaZ(roundN(Math.abs( (z2 - media) / desvioPadrao), 2));
    } else {
        z = valores[0];
		areaz = tabelaZ(roundN(Math.abs( (z - media) / desvioPadrao), 2));
    }

    switch (relacao) {
        case 'ENTRE':
			if(z1 == media && z2 > media || z1 < media && z2 == media || z1 < media && z2 > media){
				return roundN((areaz1 + areaz2)*100, 2) + " %";
			} else if(z1 < media && z2 < media){
				return roundN((areaz1 - areaz2)*100, 2) + " %";
			} else if(z1 > media && z2 > media){
				return roundN((areaz2 - areaz1)*100, 2) + " %";
			}
            break;
		case 'MAIOR':
			if(z >= media){
				return roundN((0.5 - areaz)*100, 2) + " %";
			} else if(z < media){
				return roundN((0.5 + areaz)*100, 2) + " %";
			}
			break;
		case 'MENOR':
			if(z <= media){
				return roundN((0.5 - areaz)*100, 2) + " %";
			} else if(z > media){
				return roundN((0.5 + areaz)*100, 2) + " %";
			}
			break;
        default:
            alert("Relação não identificada");
    }
}

function roundN(num,n){
  return parseFloat(Math.round(num * Math.pow(10, n)) /Math.pow(10,n)).toFixed(n);
}

function uniforme(pMin, pMax, valor, relacao){
	let media = (pMax + pMin)/2;
	let desvio = roundN(Math.sqrt((Math.pow((pMax - pMin),2))/12),2);
	let variacao = roundN((desvio/media)*100,2) + "%";
	console.log(variacao);
	
	switch (relacao) {
        case 'MAIOR':
			return roundN((1*(pMax - valor))/(pMax - pMin)*100, 2) + " %";
			break;
		case 'MENOR':
			return roundN((1*(valor - pMin))/(pMax - pMin)*100, 2) + " %";
			break;
	default:
            alert("Relação não identificada");
    }	
}


function tabelaZ(z){
    let stringZ = String(z);
    let primeiro = stringZ.slice(0,3);
    let segundo = stringZ.slice(3,4);    
    if(segundo == ""){
        segundo = "0";
    }
    segundo = parseFloat(segundo);

    let tabela = [];

    let linha1 = {};
    linha1.primeiroIndice = "0.0";
    linha1.segundoIndice = ["0.0000", "0.0040", "0.0080", "0.0120", "0.0160", "0.0199", "0.0239", "0.0279", "0.0319", "0.0359", ]
    tabela.push(linha1);

    let linha2 = {};
    linha2.primeiroIndice = "0.1";
    linha2.segundoIndice = ["0.0398", "0.0438", "0.0478", "0.0517", "0.0557", "0.0596", "0.0636", "0.0675", "0.0714", "0.0753", ]
    tabela.push(linha2);

    let linha4 = {};
    linha4.primeiroIndice = "0.2";
    linha4.segundoIndice = ["0.0793", "0.0832", "0.0871", "0.0910", "0.0948", "0.0987", "0.1026", "0.1064", "0.1103", "0.1141", ]
    tabela.push(linha4);

    let linha5 = {};
    linha5.primeiroIndice = "0.3";
    linha5.segundoIndice = ["0.1179", "0.1217", "0.1255", "0.1293", "0.1331", "0.1368", "0.1406", "0.1443", "0.1480", "0.1517", ]
    tabela.push(linha5);

    let linha6 = {};
    linha6.primeiroIndice = "0.4";
    linha6.segundoIndice = ["0.1554", "0.1591", "0.1628", "0.1664", "0.1700", "0.1736", "0.1772", "0.1808", "0.1844", "0.1879", ]
    tabela.push(linha6);

    let linha7 = {};
    linha7.primeiroIndice = "0.5";
    linha7.segundoIndice = ["0.1915", "0.1950", "0.1985", "0.2019", "0.2054", "0.2088", "0.2123", "0.2157", "0.2190", "0.2224", ]
    tabela.push(linha7);
    
    let linha8 = {};
    linha8.primeiroIndice = "0.6";
    linha8.segundoIndice = ["0.2257", "0.2291", "0.2324", "0.2357", "0.2389", "0.2422", "0.2454", "0.2486", "0.2517", "0.2549", ]
    tabela.push(linha8);

    let linha9 = {};
    linha9.primeiroIndice = "0.7";
    linha9.segundoIndice = ["0.2580", "0.2611", "0.2642", "0.2673", "0.2703", "0.2734", "0.2764", "0.2794", "0.2823", "0.2852", ]
    tabela.push(linha9);

    let linha10 = {};
    linha10.primeiroIndice = "0.8";
    linha10.segundoIndice = ["0.2881", "0.2910", "0.2939", "0.2967", "0.2995", "0.3023", "0.3051", "0.3078", "0.3106", "0.3133", ]
    tabela.push(linha10);

    let linha11 = {};
    linha11.primeiroIndice = "0.9";
    linha11.segundoIndice = ["0.3159", "0.3186", "0.3212", "0.3238", "0.3264", "0.3289", "0.3315", "0.3340", "0.3365", "0.3389", ]
    tabela.push(linha11);

    let linha12 = {};
    linha12.primeiroIndice = "1.0";
    linha12.segundoIndice = ["0.3413", "0.3438", "0.3461", "0.3485", "0.3508", "0.3531", "0.3554", "0.3577", "0.3599", "0.3621", ]
    tabela.push(linha12);

    let linha13 = {};
    linha13.primeiroIndice = "1.1";
    linha13.segundoIndice = ["0.3643", "0.3665", "0.3686", "0.3708", "0.3729", "0.3749", "0.3770", "0.3790", "0.3810", "0.3830", ]
    tabela.push(linha13);

    let linha14 = {};
    linha14.primeiroIndice = "1.2";
    linha14.segundoIndice = ["0.3849", "0.3869", "0.3888", "0.3907", "0.3925", "0.3944", "0.3962", "0.3980", "0.3997", "0.4015", ]
    tabela.push(linha14);

    let linha15 = {};
    linha15.primeiroIndice = "1.3";
    linha15.segundoIndice = ["0.4032", "0.4049", "0.4066", "0.4082", "0.4099", "0.4115", "0.4131", "0.4147", "0.4162", "0.4177", ]
    tabela.push(linha15);

    let linha16 = {};
    linha16.primeiroIndice = "1.4";
    linha16.segundoIndice = ["0.4192", "0.4207", "0.4222", "0.4236", "0.4251", "0.4265", "0.4279", "0.4292", "0.4306", "0.4319", ]
    tabela.push(linha16);

    let linha17 = {};
    linha17.primeiroIndice = "1.5";
    linha17.segundoIndice = ["0.4332", "0.4345", "0.4357", "0.4370", "0.4382", "0.4394", "0.4406", "0.4418", "0.4429", "0.4441", ]
    tabela.push(linha17);

    let linha18 = {};
    linha18.primeiroIndice = "1.6";
    linha18.segundoIndice = ["0.4452", "0.4463", "0.4474", "0.4484", "0.4495", "0.4505", "0.4515", "0.4525", "0.4535", "0.4545", ]
    tabela.push(linha18);

    let linha19 = {};
    linha19.primeiroIndice = "1.7";
    linha19.segundoIndice = ["0.4554", "0.4564", "0.4573", "0.4582", "0.4591", "0.4599", "0.4608", "0.4616", "0.4625", "0.4633", ]
    tabela.push(linha19);

    let linha20 = {};
    linha20.primeiroIndice = "1.8";
    linha20.segundoIndice = ["0.4641", "0.4649", "0.4656", "0.4664", "0.4671", "0.4678", "0.4686", "0.4693", "0.4699", "0.4706", ]
    tabela.push(linha20);

    let linha21 = {};
    linha21.primeiroIndice = "1.9";
    linha21.segundoIndice = ["0.4713", "0.4719", "0.4726", "0.4732", "0.4738", "0.4744", "0.4750", "0.4756", "0.4761", "0.4767", ]
    tabela.push(linha21);

    let linha22 = {};
    linha22.primeiroIndice = "2.0";
    linha22.segundoIndice = ["0.4772", "0.4778", "0.4783", "0.4788", "0.4793", "0.4798", "0.4803", "0.4808", "0.4812", "0.4817", ]
    tabela.push(linha22);

    let linha23 = {};
    linha23.primeiroIndice = "2.1";
    linha23.segundoIndice = ["0.4821", "0.4826", "0.4830", "0.4834", "0.4838", "0.4842", "0.4846", "0.4850", "0.4854", "0.4857", ]
    tabela.push(linha23);

    let linha24 = {};
    linha24.primeiroIndice = "2.2";
    linha24.segundoIndice = ["0.4861", "0.4864", "0.4868", "0.4871", "0.4875", "0.4878", "0.4881", "0.4884", "0.4887", "0.4890", ]
    tabela.push(linha24);

    let linha25 = {};
    linha25.primeiroIndice = "2.3";
    linha25.segundoIndice = ["0.4893", "0.4896", "0.4898", "0.4901", "0.4904", "0.4906", "0.4909", "0.4911", "0.4913", "0.4916", ]
    tabela.push(linha25);

    let linha26 = {};
    linha26.primeiroIndice = "2.4";
    linha26.segundoIndice = ["0.4918", "0.4920", "0.4922", "0.4925", "0.4927", "0.4929", "0.4931", "0.4932", "0.4934", "0.4936", ]
    tabela.push(linha26);

    let linha27 = {};
    linha27.primeiroIndice = "2.5";
    linha27.segundoIndice = ["0.4938", "0.4940", "0.4941", "0.4943", "0.4945", "0.4946", "0.4948", "0.4949", "0.4951", "0.4952", ]
    tabela.push(linha27);

    let linha28 = {};
    linha28.primeiroIndice = "2.6";
    linha28.segundoIndice = ["0.4953", "0.4955", "0.4956", "0.4957", "0.4959", "0.4960", "0.4961", "0.4962", "0.4963", "0.4964", ]
    tabela.push(linha28);

    let linha29 = {};
    linha29.primeiroIndice = "2.7";
    linha29.segundoIndice = ["0.4965", "0.4966", "0.4967", "0.4968", "0.4969", "0.4970", "0.4971", "0.4972", "0.4973", "0.4974", ]
    tabela.push(linha29);

    let linha30 = {};
    linha30.primeiroIndice = "2.8";
    linha30.segundoIndice = ["0.4974", "0.4975", "0.4967", "0.4977", "0.4977", "0.4978", "0.4979", "0.4979", "0.4980", "0.4981", ]
    tabela.push(linha30);

    let linha31 = {};
    linha31.primeiroIndice = "2.9";
    linha31.segundoIndice = ["0.4981", "0.4982", "0.4982", "0.4983", "0.4984", "0.4984", "0.4985", "0.4985", "0.4986", "0.4986", ]
    tabela.push(linha31);

    let linha32 = {};
    linha32.primeiroIndice = "3.0";
    linha32.segundoIndice = ["0.4987", "0.4987", "0.4987", "0.4988", "0.4988", "0.4989", "0.4989", "0.4989", "0.4990", "0.4990", ]
    tabela.push(linha32);

    let linha33 = {};
    linha33.primeiroIndice = "3.1";
    linha33.segundoIndice = ["0.4990", "0.4991", "0.4991", "0.4991", "0.4992", "0.4992", "0.4992", "0.4992", "0.4993", "0.4993", ]
    tabela.push(linha33);

    let linha34 = {};
    linha34.primeiroIndice = "3.2";
    linha34.segundoIndice = ["0.4993", "0.4993", "0.4994", "0.4994", "0.4994", "0.4994", "0.4994", "0.4995", "0.4995", "0.4995", ]
    tabela.push(linha34);

    let linha35 = {};
    linha35.primeiroIndice = "3.3";
    linha35.segundoIndice = ["0.4995", "0.4995", "0.4995", "0.4996", "0.4996", "0.4996", "0.4996", "0.4996", "0.4996", "0.4997", ]
    tabela.push(linha35);

    let linha36 = {};
    linha36.primeiroIndice = "3.4";
    linha36.segundoIndice = ["0.4997", "0.4997", "0.4997", "0.4997", "0.4997", "0.4997", "0.4997", "0.4997", "0.4997", "0.4998", ]
    tabela.push(linha36);

    let linha37 = {};
    linha37.primeiroIndice = "3.5";
    linha37.segundoIndice = ["0.4998", "0.4998", "0.4998", "0.4998", "0.4998", "0.4998", "0.4998", "0.4998", "0.4998", "0.4998", ]
    tabela.push(linha37);

    let linha3 = {};
    linha3.primeiroIndice = "3.6";
    linha3.segundoIndice = ["0.4998", "0.4998", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", ]
    tabela.push(linha3);

    let linha38 = {};
    linha38.primeiroIndice = "3.7";
    linha38.segundoIndice = ["0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", ]
    tabela.push(linha38);

    let linha39 = {};
    linha39.primeiroIndice = "3.8";
    linha39.segundoIndice = ["0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", "0.4999", ]
    tabela.push(linha39);

    let linha40 = {};
    linha40.primeiroIndice = "3.9";
    linha40.segundoIndice = ["0.5000", "0.5000", "0.5000", "0.5000", "0.5000", "0.5000", "0.5000", "0.5000", "0.5000", "0.5000", ]
    tabela.push(linha40);

    for(linha of tabela){
        if(linha.primeiroIndice == primeiro){
            return parseFloat(linha.segundoIndice[segundo]);
        }
    }
}