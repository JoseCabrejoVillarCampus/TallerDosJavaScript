// 1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"



let nota=0; 
let cont= Number(prompt("Cuantos datos desea ingresar: "));
for (let i = 0; i < cont ; i++){
    nota += parseInt(prompt("Porfavor ingrese una nota:"));
}
let promedio= nota/cont;
console.log(promedio)
if (promedio<=3.9){
    console.log(`Estudie`);
} else{
    console.log(`Aprobo`);
}



