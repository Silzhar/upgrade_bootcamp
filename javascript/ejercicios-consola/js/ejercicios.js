// Ejercicio 1
console.log('//----------------------/////----------------------//')
function ejercicio01(){
    function areaCuadrado(lado){
        var areaC = lado * lado;
        return areaC
    }
    
    function perimetroCuadrado(areaC){
        var perimetroC = areaC * 4;
        return perimetroC
    }

    var lado = 20;
    var area1 = areaCuadrado(lado);
    console.log('Area de cuadrado es igual a : ',area1);

    var perimetro1 = perimetroCuadrado(area1);
    console.log('Perímetro de cuadrado es igual a : ',perimetro1);
}

ejercicio01();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 2
function ejercicio02(){
    function areaTriangulo(baseT, altura){
        var areaT = (baseT * altura) / 2;
        return areaT
    }

    function perimetroTriangulo(a, baseT, c){
        var perimetroT = a + baseT + c;
        return perimetroT
    }

    var baseT = 12;
    var altura = 4;
    var area2 = areaTriangulo(baseT, altura);
    console.log('Area del triangulo : ',area2);

    var a = 8;
    var c = 6;

    var perimetro2 = perimetroTriangulo(a, baseT, c);
    console.log('Perimetro de triangulo :',perimetro2);
}

ejercicio02();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 3
function ejercicio03(){
    function areaRectangulo(baseR, alturaR){
        var areaR = baseR * alturaR;
        return areaR
    }

    function perimetroRectangulo(){
        var perimetroR = 2 * (baseR +  alturaR);
        return perimetroR
    }

    var baseR = 16
    var alturaR = 7

    var area3 = areaRectangulo(baseR, alturaR);
    console.log('Area del rectángulo : ',area3);

    var perimetro3 = perimetroRectangulo(baseR, alturaR);
    console.log('Perimetro del rectángulo : ',perimetro3);
}

ejercicio03();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 4
function ejercicio04(){
    function areaParalelogramo(baseP, alturaP){
        var areaP = baseP * alturaP;
        return areaP
    }

    function perimetroParalelogramo(){
        var perimetroP = 2 * (baseP +  alturaP);
        return perimetroP
    }

    var baseP = 32
    var alturaP = 21

    var area4 = areaParalelogramo(baseP, alturaP);
    console.log('Area del paralelogramo : ',area4);

    var perimetro4 = perimetroParalelogramo(baseP, alturaP);
    console.log('Perimetro del paralelogramo : ',perimetro4);
}

ejercicio04();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 5 
function ejercicio05(){
    function areaRombo(diagonal1, diagonal2){
        var areaRom = (diagonal1 * diagonal2) / 2;
        return areaRom
    }

    function perimetroRombo(areaRom){
        var perimetroRom = areaRom * 4;
        return perimetroRom
    }

    var diagonal1 = 13;
    var diagonal2 = 15;
    var area5 = areaRombo(diagonal1, diagonal2);
    console.log('Area del rombo : ',area5);

    var perimetro5 = perimetroRombo(area5);
    console.log('Perimetro del rombo : ',perimetro5);
}

ejercicio05();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 6
function ejercicio06(){
    function areaCometa(diagonal1, diagonal2){
        var areaCom = (diagonal1 * diagonal2) / 2;
        return areaCom
    }

    function perimetroCometa(ladoMayor, ladoMenor){
        var perimetroCom = 2 * (ladoMayor + ladoMenor);
        return perimetroCom
    }

    var diagonal1 = 26;
    var diagonal2 = 9;
    var ladoMayor = 18;
    var ladoMenor = 5;

    var area6 = areaCometa(diagonal1, diagonal2);
    console.log('Area de la cometa : ',area6);

    var perimetro6 = perimetroCometa(ladoMayor, ladoMenor);
    console.log('Perimetro de la cometa :',perimetro6);
}

ejercicio06();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 7
function ejercicio07(){
    function areaTrapecio(baseMayor, baseInferior, alturaTrap){
        var areaTrap =((baseMayor + baseInferior) * alturaTrap) / 2;
        return areaTrap
    }

    function perimetroTrapecio(baseMayor, baseInferior, ladoA, ladoB){
        var perimetroTrap = baseMayor + baseInferior + ladoA + ladoB;
        return perimetroTrap
    }

    var baseMayor = 38;
    var baseInferior = 26;
    var alturaTrap = 20;
    var ladoA = 24;
    var ladoB = 24;

    var area7 = areaTrapecio(baseMayor, baseInferior, alturaTrap);
    console.log('Area del trapecio : ',area7);

    var perimetro7 = perimetroTrapecio(baseMayor, baseInferior, ladoA, ladoB);
    console.log('Perimetro del trapecio : ',perimetro7);
}

ejercicio07();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 8
function ejercicio08(){
    function perimetroPoligonoRegular(lados, basePR){
        var perimetroPR = lados * basePR;
        return perimetroPR
    }

    function areaPoligonoRegular(perimetroPR, apotema){
        var areaPR = (perimetroPR * apotema) / 2;
        return areaPR
    }

    var lados = 6;
    var basePR = 19;
    var apotema = 11;

    var perimetro8 = perimetroPoligonoRegular(lados, basePR);
    console.log('Perimetro del poligono regular : ',perimetro8);

    var area8 = areaPoligonoRegular(perimetro8, apotema);
    console.log('Area del poligono regular : ',area8);
}

ejercicio08();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 9
function ejercicio09(){
    function areaCirculo(radio){
        var areaCir = Math.PI * (radio * radio);
        return areaCir
    }

    function perimetroCirculo(radio){
        var perimetroCir = 2 * Math.PI * radio;
        return perimetroCir
    }

    var radio = 38;
    var area9 = areaCirculo(radio);
    console.log('Area del circulo : ',area9.toFixed(2));

    var perimetro9 = perimetroCirculo(radio);
    console.log('Perimetro del circulo : ',perimetro9.toFixed(2));
}

ejercicio09();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 10   Math.pow() para elevar un número a la potencia deseada.
function ejercicio10(){
    function corona(radioExterior, radioInterior){
        var areaCorona = Math.PI * (Math.pow(radioExterior, 2) - Math.pow(radioInterior, 2));
        return areaCorona
    }

    var radioExterior = 35;
    var radioInterior = 28;
    var area10 = corona(radioExterior, radioInterior);
    console.log('Area de la corona : ',area10.toFixed(2));
}

ejercicio10();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 11
function ejercicio11(){
    function porcionArea(radio, grados){
        var porcion = (Math.PI * Math.pow(radio, 2) * grados) / 360;
        return porcion
    }

    var radio = 40;
    var grados = 34;
    var area11 = porcionArea(radio, grados);
    console.log('Porcion del area con los grados proporcionados : ',area11.toFixed(2));
}

ejercicio11();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 12
function ejercicio12(){
    function areaCilindro(radio, altura){
        var areaCil = Math.pow(Math.PI, 2) * radio * (altura + radio);
        return areaCil
    }

    function volumenCilindro(radio, altura){
        var volumen = Math.PI * Math.pow(radio, 2) * altura;
        return volumen
    }

    var radio = 6;
    var altura = 14;

    var area12 = areaCilindro(radio, altura);
    console.log('Area del cilindro : ',area12.toFixed(2));

    var volumen12 = volumenCilindro(radio, altura);
    console.log('Volumen del cilindro : ',volumen12.toFixed(2));
}

ejercicio12();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercio 13
function ejercicio13(){
    function areaCono(radioBase , generatriz){
        var areaCon = Math.PI * radioBase * (radioBase + generatriz);
        return areaCon
    }

    function volumenCono(radioBase, altura){
        var volumenC = (Math.PI * Math.pow(radioBase, 2) * altura) / 3;
        return volumenC
    }

    var radioBase = 18;
    var generatriz = 32;
    var altura = 27;

    var area13 = areaCono(radioBase, generatriz);
    console.log('Area del cono : ',area13.toFixed(2));

    var volumen13 = volumenCono(radioBase, altura);
    console.log('Volumen del cono : ',volumen13.toFixed(2));
}   

ejercicio13();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercio 14
function ejercicio14(){
    function areaTroncoCono(radioBaseInferior ,radioBaseSuperior, generatriz){
        var areatronco = Math.PI * (generatriz * 
            (radioBaseInferior + radioBaseSuperior) + Math.pow(radioBaseInferior, 2) + Math.pow(radioBaseSuperior, 2));
        return areatronco
    }

    function volumenTroncoCono(radioBaseInferior, radioBaseSuperior, alturaTronco){
        var volumenTC = Math.PI * alturaTronco * 
        (Math.pow(radioBaseInferior, 2) + Math.pow(radioBaseSuperior, 2) + radioBaseInferior * radioBaseSuperior) / 3;
        return volumenTC
    }

    var radioBaseSuperior = 12;
    var radioBaseInferior = 16
    var generatriz = 24;
    var alturaTronco = 29;

    var area14 = areaTroncoCono(radioBaseInferior ,radioBaseSuperior, generatriz);
    console.log('Area del cono : ',area14.toFixed(2));

    var volumen14 = volumenTroncoCono(radioBaseInferior, radioBaseSuperior, alturaTronco);
    console.log('Volumen del cono : ',volumen14.toFixed(2));
}   

ejercicio14();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 15
function ejercicio15(){
    function areaEsfera(radioEsfera){
        var areaE = 4 * Math.PI * Math.pow(radioEsfera, 2);
        return areaE
    }

    function volumenEsfera(radioEsfera){
        var volumenE = (4 * Math.PI * Math.pow(radioEsfera, 2)) / 3;
        return volumenE
    }

    var radioEsfera = 30;
    var area15 = areaEsfera(radioEsfera);
    console.log('Area de la esfera :', area15.toFixed(2));

    var volumen15 = volumenEsfera(radioEsfera);
    console.log('Volumen de la esfera :',volumen15.toFixed(2));
}

ejercicio15();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//