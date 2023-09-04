// ejerciocio n1

function numeroParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par");
    } else {
        console.log(numero + " es un número impar");
    }
}

verificarParOImpar(4);

//Ejercicio n2

function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1) {
        console.log(numero2 + " es mayor que " + numero1);
    } else {
        console.log(numero1 + " y " + numero2 + " son iguales");
    }
}

compararNumeros(4, 9);
compararNumeros(6, 6);
compararNumeros(11, 8);

//Ejercicio n3

function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " es múltiplo de 5");
    } else {
        console.log(numero + " no es múltiplo de 5");
    }
}

esMultiploDeCinco(10);

//Ejercicio n4

function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

imprimirNumerosHasta(5);

//Ejercicio n5

function imprimirPalabraNVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

imprimirPalabraNVeces("Hola", 3);

//Ejercicio n6

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//const miArray = [1, 2, 3, 4, 5];
imprimirArray(miArray);

//Ejercicio n7

function imprimirArraySinQuintoElemento(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
        console.log(array[i]);
    }
    }
}

//const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArraySinQuintoElemento(miArray);

//Ejercicio n8

function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * numero;
    console.log(resultado);
    }
}

const miArray = [1, 2, 3, 4, 5];
const multiplicador = 2;
multiplicarArrayPorNumero(miArray, multiplicador);


