// Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.

let n1= prompt(`Ingrese el primer nombre: `);
let e1= prompt(`Ingrese la edad: `);
let n2= prompt(`Ingrese el segundo nombre: `);
let e2= prompt(`Ingrese la edad: `);
let n3= prompt(`Ingrese el tercer nombre: `);
let e3= prompt(`Ingrese la edad: `);
	
if (e1<e2){
    if (e2<e3){
        console.log(`La persona de mayor edad es ${n3}`)
    }else{
        console.log(`La persona de mayor edad es ${n2}`)
    }
}else{
    if(e1<e3){
        console.log(`La persona de mayor edad es ${n3}`)
    }else{
        console.log(`La persona de mayor edad es ${n1}`)
    }
}
	