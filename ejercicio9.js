//9. N atletas han pasado a finales en salto triple en los juegos
//olímpicos femenino de 2022. Diseñe un programa que pida por
//teclado los nombres de cada atleta finalista y a su vez, sus
//marcas del salto en metros. Informar el nombre de la atleta
//campeona que se quede con la medalla de oro y si rompió
//récord, reportar el pago que será de 500 millones. El récord
//esta en 15,50 metros.


let atletas=[]
let marcas=[]
let record=15.50

    
alert("\n\n...............Registro Salto triple.....................\n");
let num1 = prompt(`\nCuantos atletas desea agregar: `);
for (let i = 0; i < num1; i++){
    atletas.unshift(prompt(`Ingrese el nombre del atleta: ${i+1}`))
    marcas.unshift(parseFloat(prompt(`Ingrese la marca del atleta: ${i+1}` )))
}

let lista=marcas.indexOf(Math.max(...marcas));
console.log(`${atletas[lista]} gano la medalla de oro, fue la atleta con mayor distancia ${marcas[lista]} metros`);
if (marcas[lista]>15.50){
    console.log(`Rompio el record de 15,50 metros con una distancia de ${marcas[lista]} metros y se lleva 500 millones de pesos`);
} else{
    console.log(`El record se mantiene con 15.50 metros`);
}
        
         
    
