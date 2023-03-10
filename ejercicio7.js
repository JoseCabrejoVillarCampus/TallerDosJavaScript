//7. Programa que pida el ingreso del nombre y precio de un artículo y la
//cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
//en su factura.

let nombre=0;
let precio=0;
let cantidad=0;
do{
     nombre= prompt(`Ingrese el nombre de su articulo: `);
     precio= prompt(`Ingrese el precio del articulo: `);
     cantidad= prompt(`Ingrese la cantidad de articulos: `);
}while(confirm(`Deseas agregar otro dato?`));


console.log(`Usted compro ${cantidad} de ${nombre}, debe pagar ${cantidad*precio} `)
