// Creando funcion con tres paramentros que se sumen
// Primera parte
// Crear una función con tres parámetros que sean números que se suman entre sí.
//Llamar a la función en el main y darle valores.

function suma(num1,num2,num3){
	return num1 + num2 + num3
};
console.log(suma(4,6,8));


//Segunda parte
//Crear una clase coche.
//Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
//Una función que incremente el número de puertas que tiene el coche.
//Crear un objeto miCoche en el main y añadirle una puerta.
//Mostrar el número de puertas que tiene el objeto.

class Coche {
	constructor(puertas){
		this.puertas = puertas;
	}
	 get incremento(){
		 this.puertas += 1;
	}
	puertas(){
		return this.puertas;
	}
}
const miCoche = new Coche(0);