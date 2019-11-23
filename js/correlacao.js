var vetx = [];
var vety = [];
var a, b;

function doCorrelacao(inputx, inputy){
    vetx = standardize(inputx);
    vety = standardize(inputy);

    if(vetx.length == vety.length){
        let obs = vetx.length;
        let somaX = 0;
        let somaY = 0;
        let somaXY = 0;
        let somaXX = 0;
        let somaYY = 0;

        for(let i = 0; i < obs; i++){
            somaX += vetx[i];
            somaY += vety[i];
            somaXY += vetx[i] * vety[i];
            somaXX += vetx[i] * vetx[i];
            somaYY += vety[i] * vety[i];
        }
        
        let correlacao = ((obs * somaXY) - (somaX * somaY)) / Math.sqrt(((obs * somaXX - Math.pow(somaX, 2)) * ((obs * somaYY - Math.pow(somaY, 2)))));
        correlacao = roundN(correlacao*100,2);

        a = ((obs * somaXY) - (somaX * somaY)) / ((obs * somaXX) - Math.pow(somaX, 2));
        a = roundN(a,4);

        let yBarra = somaY / obs;

        let xBarra = somaX / obs;

        b = yBarra - (a * xBarra);
        b = roundN(b,4);

        drawCorrelacaoTable(Math.abs(correlacao), a, b);
        drawNewPointDiv();
        drawRegressaoChart(vetx, vety, a, b);
    } else {
        alert("Há pontos não relacionados");
    }
}
function newPointComplete(newValue, XorY, a, b){
    if(XorY == 1){
        $('#newYInput').val(parseFloat(roundN(parseFloat(a) * parseFloat(newValue) + parseFloat(b),2)));
    } else if(XorY == 2){
        $('#newXInput').val(parseFloat(roundN((parseFloat(newValue) - parseFloat(b)) / parseFloat(a),2)));
    }
}