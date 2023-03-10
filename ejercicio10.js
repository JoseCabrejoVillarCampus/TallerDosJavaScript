/* 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */

/* let num=[];
let i = 0;
let opc = 1;
let suma = 0;  
while (opc != 0){
    let nums = parseInt(prompt(`Ingrese el numero ${i+1} porfavor:`)); 
    opc = nums
    num.unshift(nums);
    i++
}

console.log(num);

for (let n of num) {
	suma += n;
}
let promedio= suma/(num.length)-num[0];
console.log(suma);
console.log(num.length);
console.log(promedio); */

/* let num=0; */
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



const initialValue = 0;
const sumWithInitial = list.reduce(initialValue);
console.log(sumWithInitial);
/* console.log(sum);
console.log(list.length); */

