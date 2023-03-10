// 3. Construir el algoritmo para determinar el voltaje de un
// circuito a partir de la resistencia y la intensidad de corriente.

// La Ley de Ohm
// Al combinar los elementos de voltaje, corriente, y resistencia, Ohm desarrollo la fórmula:

// Donde

// V = Voltaje en volts
// I = Corriente en amperes
// R = Resistencia en Ohm

let corriente=0;
let resistencia=0;
let voltaje=0;

do{
    corriente= prompt(`Ingrese la corriente en amperes`);
    resistencia= prompt(`Ingrese la resitencia en Ohm`);
    voltaje= corriente*resistencia;
} while(confirm(`Deseas agregar otro dato?`));
    


console.log(`El voltaje es ${voltaje} voltios`);


