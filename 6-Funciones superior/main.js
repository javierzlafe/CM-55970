

const coche =  {
marca: 'Toyota',
modelo: 'Corolla',
anio: 2022,
color: 'Azul',
arrancar: function() {
console.log('El coche está arrancando');
},
acelerar: function() {
console.log('El coche está acelerando');
},
frenar: function() {
console.log('El coche está frenando');
}
};



// Ejemplo de uso
coche.arrancar(); // Output: El coche está arrancando
coche.acelerar(); // Output: El coche está acelerando
coche.frenar(); // Output: El coche está frenando






/*  const frutas = ["manzana", "banana", "naranja"];


            --FOREACH--



forEach(): Ejecuta una función para cada elemento del array.
se podria decir que es como un for, aplicado mas sencillamente a un array


frutas.forEach(function(fruta) {
console.log(fruta.toUpperCase());
});

      // MANZANA
      // BANANA
      // NARANJA
      

en este caso tambien se podria usar un for-of, pero hay pruebas que demostraron
que el uso de for each es mucho mas rapido a la hora de ejecutar y consumir recursos.





                      --MAP--



map(): Crea un nuevo array con el resultado de llamar a una función para cada elemento del array.
      
      const numeros = [1, 2, 3, 4, 5];
      //declaro constante "doble" y guardo el nuevo array
      const doble = numeros.map(function(numero) {   //Recorro cada elemento
        return numero * 2;   //lo multiplico por 2
      });
      console.log(doble); // [2, 4, 6, 8, 10]


map es parecido a for each pero la diferencia mas importante es que map, crea un NUEVO ARRAY
y el for each, trabajo en el array original.





                              const numeros = [2, 4, 6, 8, 10];
    const encontrado = numeros.find((numero) => numero >= 5);

    console.log(encontrado); // Output: 6




                  --FILTER--



filter(): Crea un nuevo array con todos los elementos que pasan una prueba especificada en una función.
      
const numerosPares = numeros.filter(function(numero) {
        return numero % 2 === 0; //si lo divido por dos y el resto da 0
      });
      console.log(numerosPares); // [2, 4]




      mostrar el ejemplo de pruebas unitarias


*/


                  /* --REDUCE-- */


/* El método reduce en JavaScript se utiliza para reducir un array a un único valor, 
aplicando una función de reducción a cada elemento del array. 
Es decir, se utiliza para procesar cada elemento del array y combinarlos en un solo valor. */

/* const preciosPrendas = [1, 2, 3, 4, 5];
const suma = preciosPrendas.reduce((acumulador, valorActual) => acumulador + valorActual);
                
console.log(suma); // Output: 15
*/




              //SORT

/*               const numeros = [7, 2, 10, 1, 5];

// Ordenar los números de forma ascendente
numeros.sort(function(a, b) {
return a - b;
});

console.log(numeros);  */





/* 
productos
funcion constructora *
nombre,id,stock,precio  *
*/



const Productos = function(nombre,id,stock,precio){
    this.nombre = nombre
    this.id = id
    this.stock = stock
    this.precio =precio
}

let producto1 = new Productos("lenovo", 1, 10, 600000)
let producto2 = new Productos("samsung", 2, 10, 600000)
let producto3 = new Productos("hp", 3, 10, 600000)
let producto4 = new Productos("mac", 4, 10, 600000)
let producto5 = new Productos("pochoclo", 15, 10, 600000)

let lista = [producto1,producto2,producto3,producto4,producto5]

function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que deseas buscar").trim().toUpperCase()
    let resultado = lista.filter((x)=> x.nombre.toUpperCase().includes(palabraClave))
    
    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con: "+ palabraClave)
    }
}