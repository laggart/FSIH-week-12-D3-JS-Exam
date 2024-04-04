
// Ejercicio 1

function entradaParticipantes(){ 
    
    // Guardamos los valores que pediremos en el prompt
    const edades = []; 

    //pedimos las 6 edades mediante prompt
    for (let i=0; i<6; i++){   
    const edad = parseInt(prompt('Ingrese la edad del participante ' + (i+1) ));
    edades.push(edad);
    }
    console.log(edades) //revisamos que esten almacenadas

    let pagoEntrada = 0; //acumulador de cuanto hay que pagar
    
    //recorremos el array para calcular el monto
    for (let i=0; i< edades.length; i++) {
        if (edades[i] >= 18) {
            pagoEntrada += 10;
        } else {
            pagoEntrada +=5;
        }
    }

    console.log(`El costo total es de: ${pagoEntrada} €`) // Devolvemos el valor
}

 entradaParticipantes(); // llamamos a la función



