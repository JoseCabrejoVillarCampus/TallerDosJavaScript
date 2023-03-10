// Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.

let nombre=[];
let edad=[];

let num1 = prompt(`\nCuantas personas desea agregar: `);
for (let i = 0; i < num1; i++){
    nombre.unshift(prompt(`Ingrese el nombre de la persona: `));
    edad.unshift(parseInt(prompt(`Ingrese la edad de la persona: `)));
}
    
let lista=edad.indexOf(Math.max(...edad));
console.log(`${nombre[lista]} es la persona mayor con ${edad[lista]} años`);

/* let n1= prompt(`Ingrese el primer nombre: `);
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
} */
	