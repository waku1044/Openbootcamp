/*En este ejercicio practicarás las estructuras de control, para ello deberás crear:

Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

Incrementar el valor de la variable en uno cada vez que se ejecute.

Mostrarlo por pantalla cada vez que se ejecute.

Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.*/

let numeroIf = 8;
if (numeroIf > 0) {
    console.log('El numero es Positivo');
} else if (numeroIf === 0) {
    console.log('El numero es 0');
} else {
    console.log('El numero es negativo');
}

let numeroWhile = -2;
while (numeroWhile < 3) {
    numeroWhile++
    console.log(numeroWhile);
}

do {
    numeroWhile++
    console.log(numeroWhile + ' numero del ejercicio do while');

} while (numeroWhile < -1);

let numeroFor = 0;
for (; numeroFor <= 3; numeroFor++) {
    console.log(numeroFor + ' Numero del bucle For')
}

let estacion = 'verano';

switch (estacion) {
    case 'verano':
        console.log('La estacion que esta en la variable es verano');
        break;
    case 'invierno':
        console.log('La estacion que esta en la variable es invierno');
        break;
    case 'otoño':
        console.log('La estacion que esta en la variable es otoño');
        break;
    case 'primavera':
        console.log('La estacion que esta en la variable es primavera');
        break;
    default:
        console.log('No corresponde a ninguna estacion')
}