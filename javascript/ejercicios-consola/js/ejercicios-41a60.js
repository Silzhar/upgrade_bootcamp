// Ejercicio 41
var max = 10;
var totalSumaCuadrados = 0;
var totalcuadradosSuma = 0;
var listsumaCuadrados = [];


function ejercicio41(max){
    function diferenciaCuadrados(){
    
        for (controller; controller <= control_max; controller++){
            var potencia =  Math.pow(controller, 2);
            listsumaCuadrados.push(potencia);

            list_num.push(controller);
        }

        totalSumaCuadrados = listsumaCuadrados.reduce((num1, num2) => num1 + num2);
        totalcuadradosSuma = Math.pow(list_num.reduce((num1, num2) => num1 + num2), 2);
        var resultado = [];
        resultado.push(totalcuadradosSuma - totalSumaCuadrados);

        console.log('Total suma de los cuadrados : ',totalSumaCuadrados);
        console.log('Total cuadrado de la suma de los numeros  : ',totalcuadradosSuma);
        console.log('Diferencia entre los cuadrados : ',resultado);

        return totalcuadradosSuma, totalSumaCuadrados;
    }

    var controller = 0;
    var control_max = max;
    var list_num = [];
    
    diferenciaCuadrados();
       
}

ejercicio41(max);
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 42
function ejercicio42(){
    var max_num = 1000;
    ejercicio41(max_num);
    
}

console.log('Ejercicio 42');
ejercicio42();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 43
function ejercicio43(){
    function diferenciasCuadrados(){
        var num_max = 1000;
        ejercicio41(num_max);
    }
    
    console.log('Ejercicio 43');
    diferenciasCuadrados();

}

ejercicio43();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// ejercicio 44
function ejercicio44(){
    
    console.log('Suma total de los cuadrados :',totalcuadradosSuma);

}

console.log('Ejercicio 44');
ejercicio44();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 45

// repetido 

//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 46
function ejercicio46(){
    function pares(nums){
        return nums % 2 == 0;
    }

    var num_pares = listsumaCuadrados.filter(pares);
    console.log('Lista de exponentes pares :',num_pares);
}

console.log('Ejercicio 46');
ejercicio46();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 47
function ejercicio47(){
    var list_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 , 97];
    
    function lugarPrimo(p){
        var posicionPrimo = list_primos[p];
        console.log('En la posición dada se encuentra el número :',posicionPrimo);
    }

    lugarPrimo(4);
}

console.log('Ejercicio 47');
ejercicio47();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 48
// function ejercicio48(){
function numeroTriangular(N){
    var inicio = 0;
    var numeros = [];

    while(inicio <= N){
        numeros.push(inicio);
        inicio++;
    };

    suma_num = numeros.reduce((numUno, numDos) => numUno + numDos);
    return numeros;
}

var suma_num = 0;

numeroTriangular(7);

console.log('Ejercicio 48');
console.log('Valor de triangular :',suma_num);
// }

// ejercicio48();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 49
function numerosTriangulares(){
    var num_hasta_fin = numeroTriangular(14);
    console.log('Valores hasta N :',num_hasta_fin);

}

console.log('Ejercicio 49');
numerosTriangulares();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 50
function ejercicio50(){
    var total_num = numeroTriangular(20);

    function numPares(numero){
        return numero % 2 == 0;
    }

    var list_pares = total_num.filter(numPares );
    console.log('Lista de números pares :',list_pares);
}

console.log('Ejercicio 50');
ejercicio50();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 51
function ejercicio51(){
    var array_num = numeroTriangular(20);

    function numImpares(num){
        return num % 2 != 0;
    }

    var list_impares = array_num.filter(numImpares);
    console.log('Lista de números impares :',list_impares);
}

console.log('Ejercicio 51');
ejercicio51();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejericio 52
function ejercicio52(){
    var list_triangulares = numeroTriangular(20);
    var list_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 , 97];
    var primos_triangulares = [];
   
    for(var parametro1 = 0;parametro1 < list_triangulares.length; parametro1++){
        for(var parametro2 = 0;parametro2 < list_primos.length; parametro2++){
            if(list_triangulares[parametro1] === list_primos[parametro2]){
                primos_triangulares.push(list_triangulares[parametro1]);
            }
        }

    }

    console.log('Lista de números triangulares de N :',primos_triangulares);     
    }

console.log('Ejercicio 52');
ejercicio52();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 53
function triangularesNoPrimos(){
    var triangulares = numeroTriangular(20);
    var list_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 , 97];
    // var list_no_primos = [];

    // function noPrimos(numero){
    //     if(numero === list_primos[numero]){
    //         triangulares.pop(numero);
    //         // return numero;
    //     }
    // }

    var no_primos = triangulares.filter(numero => list_primos !== numero);
    console.log('Triangulares no primos :',no_primos);
}

console.log('Ejercicio 53');
triangularesNoPrimos();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 57
function extraeDigitos(c){
    var cadenaSplit = c.split(' ');
    for (numero of cadenaSplit){
        new_cadena.push(parseInt(numero));
    }
    
}

var cadena = '1 2 3 4 5 6 7 8 9 10 11 12';
var new_cadena = [];

extraeDigitos(cadena);

console.log('Ejercicio 57');
console.log('Neva cadena : ',new_cadena )
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicios 58
function sumaDIgitos(){
    new_cadena.length = 0;
    var new_extraeDigitos = extraeDigitos(suma_digitos);
    
    var suma_cadena = new_cadena.reduce((n_uno, n_dos) => n_uno + n_dos);
    console.log('Suma de la nueva cadena : ',suma_cadena )

}

var suma_digitos = "9 4 5 8 2 10 3 6";

sumaDIgitos();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 59
function contadorletras(){

}