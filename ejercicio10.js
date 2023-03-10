/* 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */


let list = [];
i = 1;
do{
    let opc = Number(prompt(`Ingrese el numero ${i++} porfavor:`));
    if(opc!=0){
        list.unshift(opc);
    }else{
        break;
    }
}while(true);
console.log(list);


let sum = list.reduce(add,0);
function add(accumulator, a) {
    return accumulator + a;
} 
console.log(`El valor maximo digitado es: ${Math.max(...list)}`);
console.log(`El valor minimo digitado es: ${Math.min(...list)}`);
let unidades= list.length;
console.log(`El total de numeros digitados es ${unidades}`); 
console.log(`La suma de los numeros digitados es ${sum}`);
let promedio=sum/list.length;
console.log(`El promedio de los numeros digitados es ${promedio}`);

