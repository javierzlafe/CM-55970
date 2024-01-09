

/* let miArray = [1,"dos", true] */


/* 
const frutas = ["manzana", "banana", "pera", "sandia"]
//indice            0          1        2        3



let frutaPreferida = frutas[3]
 */



/* const numeros= [10,20,30,40]

let resultado = numeros[1] + numeros[3]

console.log(resultado)
 */





/* 
const numeros= [10,20,30,40,2,5,6,2,1,5,96,32,65,4,96,65,2,6,2,5,623,52,5,65,52,32,63,2,5,5,21,32,5,5,2,2,]

console.log(numeros.length)

for(let i=0;  i < numeros.length  ;i++){
    console.log(numeros[i])
}


 */






//   PUSH


/* 
push(): agregar uno o mas elementos al final de array
*/

/* const frutas = ["manzana", "banana", "pera", "sandia"]

frutas.push("kiwi")

console.log(frutas) */


//POP

/* 
    pop(): elimina el uttimo elemnto del array
*/


/* const frutas = ["manzana", "banana", "pera", "sandia"]

frutas.pop()

console.log(frutas) */




//SHIFT

/* 
shift(): elimina el primero del array
*/

/* const frutas = ["manzana", "banana", "pera", "sandia"]

frutas.shift()

console.log(frutas) */


//UNSHIFT

/* 
unshift(): agrega un elemento a la primera posicion
*/


/* const frutas = ["manzana", "banana", "pera", "sandia"]

frutas.unshift("melon")

console.log(frutas) */



//SLICE


/* 
    slice(): retorna un copia de una parte del array (desde,hasta)
*/

/* const frutas = ["manzana", "banana", "pera", "sandia"]

const copia =  frutas.slice(0,2)

console.log(copia) */




//SPLICE

/* 
    splice(): cambia nel contenido del array, eleminando elementos y reemplazando
*/





/* const frutas = ["manzana", "banana", "pera", "sandia"]

const copia =  frutas.splice(0,2)

console.log(copia)
 */






        //CONCAT

/* 
    concat(): une 2 o mas array
*/


/* const perros= ["puqui", "negrito", "manchita"]
const gatos = ["michi", "salem", "garfield"]


const mascotas =  perros.concat(gatos)

console.log(mascotas) */




/* let array = [
                   { id: 1, producto: "Arroz" },
                   { id: 2,  producto: "Fideo" },
                   { id: 3,  producto: "Pan" }
] */



//INDEXOF


/* 
    indexof():retorna la posicion de el elemento especifo (su indeice).
    si el elemento NO EXISTE me retorna -1
*/

/* const frutas = ["manzana", "banana", "pera", "sandia"]

const posicion = frutas.indexOf("melon")

console.log(posicion) */



//INCLUDES

/* 
include(): me permite saber si un elemento existe o no, dentro de mi array
esto retorna un booleano, true o false
 */



/* const frutas = ["manzana", "banana", "pera", "sandia"]

console.log(frutas.includes("melon")) */







/* let miArray = []
let entrada = prompt("ingresa tu nombre")
while(entrada !== null){
    miArray.push(entrada)
    entrada = prompt("ingresa otro nombre o apreta cancelar")
}
console.log(miArray) */



const miArray= ["mi elemento1","mi elemento2","mi elemento3","mi elemento4"]

let pochoclo = prompt("pasame el nombre del producto")
let indice = miArray.indexOf(pochoclo)

if(indice !== -1){
    miArray.splice(indice,1)
}

console.log(miArray)