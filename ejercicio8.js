//8. Programa que Ingrese por teclado:
//a. el valor del lado de un cuadrado para mostrar por pantalla el
//perímetro del mismo
//b. la base y la altura de un rectángulo para mostrar el área del
//mismo
do{
    let opcion=prompt(`Ingrece una opcion 1 para calcular perimetro de un cuadrado y 2 para el area de un rectangulo:`);
    if (opcion=1){
        let cuadroPerimetro=prompt(`Ingrece el valor de la arista`);
        console.log(`El perimetro de su cuadrado es ${cuadroPerimetro*4} cm`);
    }else if (opcion=2){
        let baseRecta=prompt(`Ingrece el valor de la base`);
        let alturaRecta=prompt(`Ingrece el valor de la altura`);
        console.log(`El area del rectangulo es ${baseRecta*alturaRecta}`);
    }else{
        console.log(`opcion no valida`)
    }
}while(confirm(`Deseas agregar otro dato?`));
