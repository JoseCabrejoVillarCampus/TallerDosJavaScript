// 2. Dado un número indicar si es par o impar y si es mayor de 10.

let num;
let cont= Number(prompt("Cuantos datos desea ingresar: "));
for (let i = 0; i < cont ; i++){
    num=prompt("Introducir número");
    if(num % 2 == 0){
    console.log(`El númeroes ${num} Par`);
    } else{
    console.log(`El número es ${num} Impar`);
}
}