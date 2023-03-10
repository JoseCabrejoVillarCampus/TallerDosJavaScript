// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.

let num1=parseFloat(promt(`Ingresa el primer Número:`));
let num2=parseFloat(promt(`Ingresa el segundo Número:`));

if(num1>num2){
    console.log(`Se han sumado los numeros dando como resultado: ${num1+num2}`);
    console.log(`Se han restado los numeros dando como resultado: ${num1-num2}`);  
}else{
    console.log(`Se han multiplicado los numeros dando como resultado: ${num1*num2}`);
    console.log(`Se han dividido los numeros dando como resultado: ${num1/num2}`);
}