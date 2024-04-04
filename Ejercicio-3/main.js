

// Ejercicio 3

const movies = []

let titulosPeliculas = prompt('Introduce tus peliculas favoritas, cuando hayas terminado escribe: salir')

while (titulosPeliculas.toLowerCase() !== 'salir') {
    movies.push(titulosPeliculas)

    titulosPeliculas = prompt('Introduce tus peliculas favoritas, cuando hayas terminado escribe: salir')
}

console.log(movies) // Revisamos que los valores se esten pasando.
movies.sort() // Ordenamos alfabéticamente

//Mostramos en consola en lineas distintas
movies.forEach(elemento => {
   console.log(elemento) 
})  

//////////////////////////////////////////////////////////////////////////////////////////

