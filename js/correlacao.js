/* ################################### MANUAL 
let inputx = ["300", "400", "500", "600", "700", "800"];
let inputy = ["33", "25", "24", "18", "12", "10"];*/

let inputx = "300;400;500;600;700;800";
let inputy = "33;25;24;18;12;10";

function doCorrelacao(inputx, inputy){
    let vetx = standardize(inputx);
    let vety = standardize(inputy);

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
        console.log(somaX);
        console.log(somaY);
        console.log(somaXY);
        console.log(somaXX);
        console.log(somaYY);

        let correlacao = ((obs * somaXY) - (somaX * somaY)) / Math.sqrt(((obs * somaXX - Math.pow(somaX, 2)) * ((obs * somaYY - Math.pow(somaY, 2)))));
        console.log(roundN(correlacao,2));

        let a = ((obs * somaXY) - (somaX * somaY)) / ((obs * somaXX) - Math.pow(somaX, 2));
        console.log(roundN(a,2));
        let yBarra = somaY / obs;
        let xBarra = somaX / obs;
        let b = yBarra - (a * xBarra);
        console.log(roundN(b,2));

    } else {
        alert("Há pontos não relacionados");
    }
    

}