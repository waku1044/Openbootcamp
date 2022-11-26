function suma(num1,num2,num3){
	return num1 + num2 + num3
};
console.log(suma(4,6,8));

class Coche{
	constructor(puerta){
	this.puerta = puerta

	};

 incremento(){
	return this.puerta + 1;
	
}
get Puertas(){
	 return this.puerta;
}
}
const miCoche = new Coche(4);
