

                    const frutas= ["manzana", "pera", "banana", "sandia"]
                        //indice:      0         1        2         3

                        


    /* Para acceder a los elementos de un array, se usa el índice del elemento dentro de los corchetes.
    Por ejemplo, para acceder al segundo elemento del array que creamos aca, se puede escribir: */

                       /*  console.log(frutas[0])  //me tira la manzana
                        console.log(frutas[2])  //me arroja la banana*/

                        //y para asignar ese valor a una variable, seria:

             //let frutaPreferida = frutas[1]; // en este caso tira "pera" */






     /* 
                const numeros = [10, 20, 30, 40];

     Podemos acceder al primer elemento del array (10) utilizando el índice 0:

                console.log(numeros[0]); // Output: 10
    

     y si queremos acceder al tercer elemento del array (30) se usa el índice 2:

                console.log(numeros[2]); // Output: 30


    También se puede asignar un nuevo valor a un elemento específico del array usando su índice:

                numeros[1] = 25;
                console.log(numeros); // Output: [10, 25, 30, 40]
      */
    
    /* Es importante tener en cuenta que si queremos acceder a un índice que no existe, 
    nos va a tirar el valor undefined */

                //console.log(numeros[4]); // Output: undefined

            
                                        //EJEMPLO FACIL DE SUMA CON ARRAY

        /*  const  numeros = [1,2,3,4,5];
            console.log( "indice numero 0: " + numeros[0] ) // 1; 
            console.log( "indice numero 3: " + numeros[3] ) // 4; 
            let resultado  = numeros[1] + numeros[2] 
            console.log( resultado  ) // 5; */




/* el bucle for se puede usar para poder RECORRER un array.*/


                        /* const numeros = [10, 20, 30, 40, 50];
                        for (let i = 0; i < 5; i++) {  
                            console.log(numeros[i]);
                        }

                        este bucle me muestra hasta el 5, porque no recorro los numeros, sino que recorro 
                        EL INDICE, 
                        */







                    //METODOS Y PROPIEDADES DE LOS ARRAY        



                    /*

                                            ---LENGTH---

                    length(): cuenta la cantidad de propiedades que hay en el array
                            
                                const miArray = ["marca", 3 ,"palabra"];
                                console.log( miArray.length ); //imprime 3
                    
                    este es muy importante porque nos sirve para que se recorra todo el array
                    sin tener que especificar hasta Donde, por ejemplo:
                    
                                const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

                                for (let i= 0; i < numeros.length; i++) {
                                    alert(numeros[i]);
                                } */

                    


                     /*                        ---PUSH---

                    push(): Agrega uno o más elementos al final del array.



                                const frutas = ["manzana", "banana", "naranja"];
                                frutas.push('otro elemento')
                                
                                console.log(frutas.length) // ⇒ 4
                                console.log(frutas) // ["manzana", "banana", "naranja"“otro elemento”] */
                    







                                      /*           --POP--

                    pop(): Elimina el último elemento del array.




                                let frutas = ["manzana", "banana", "naranja"];
                                let ultimoElemento = frutas.pop();

                                console.log(frutas);  // ["manzana", "banana"]
                                console.log(ultimoElemento);  // "naranja"

                     


                                                --SHIFT--

                    shift(): Elimina el primer elemento del array.
                                
                                frutas.shift();
                                console.log(frutas); // ["banana", "naranja"]



                                                --UNSHIFT--


                    unshift(): Agrega uno o más elementos al inicio del array.
                                
                                frutas.unshift('kiwi');
                                console.log(frutas); // ["kiwi", "banana", "naranja"]



                                                --SLICE--


                    slice(): Retorna una copia de parte del array. parametros (desde,hasta)
                                
                                const copia = frutas.slice(0, 2);
                                console.log(copia); // ["kiwi", "banana"]




                                                --SPLICE--



                    splice(): Cambia el contenido del array eliminando elementos y reemplazandolos.



                    concat(): Une dos o más arrays.
                                
                                const perros = ['puqui', 'negrito','manchita'];
                                const gatos = ['mishi', 'garfield', 'salem']
                                const mascotas = perros.concat(gatos);
                                console.log(mascotas); // aparecen todos los perros y gatos





                                                --JOIN--

                    join(): Une todos los elementos de un array en una cadena.
                               
    º                            const cadena = frutas.join(', ');
                                console.log(cadena); // "kiwi, mango, sandía, banana, naranja"





                                                --INDEXOF--



                    indexOf(): Retorna la posición de un elemento específico en el array.
                                si el elemento no existe, retorna -1
                                
                                 const posicion = frutas.indexOf('banana');
                                console.log(posicion); // 1
 


                                                --INCLUDES--


                    includes(): el método includes me permite saber si un elemento que recibo por parámetro 
                    existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:



                                const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

                                console.log( nombres.includes('Rita') ) // ⇒ true
                                console.log( nombres.includes('Miguel') ) // ⇒ true
                                console.log( nombres.includes('Julieta') ) // ⇒ false




                                   /*  --EJEMPLO FACIL DE USO CON PUSH--

                    let miArray = [];

                    // Pedimos al usuario que ingrese un nombre
                    let entrada = prompt("Ingresa un nombre:");
                    
                    // Mientras el usuario siga ingresando nombres, los agregamos al array
                    while (entrada !== null) {
                      // agregamos al array lo que escribe el usuario
                      miArray.push(entrada);
                      // Pedimos al usuario que ingrese otro número
                      entrada = prompt("Ingresa otro número o presiona cancelar para terminar:");
                    }
                    
                    // Mostramos el array completo en la consola
                    console.log(miArray); */





                                /* EJEMPLO SIMPLE USANDO INDEX OF Y SPLICE

          let miArray = ['elemento1', 'elemento2', 'elemento3', 'elemento4'];

            // Encontramos el índice del elemento que queremos eliminar
            let indice = miArray.indexOf('elemento3');

            // Si el elemento existe en el array, lo eliminamos con splice()
            if (indice !== -1) {
            miArray.splice(indice, 1);
            }

            console.log(miArray); // ['elemento1', 'elemento2', 'elemento4']
 */





                               /*  COMO ARMAR UN ARRAY DE OBJETOS         FILMINA 33


                        let personas = [
                        { nombre: "Juan", edad: 25, ciudad: "Buenos Aires" },
                        { nombre: "María", edad: 30, ciudad: "Córdoba" },
                        { nombre: "Pedro", edad: 20, ciudad: "Rosario" }
                        ];



los arrays de objetos,son una forma de almacenar y manipular 
datos complejos. igual que los arrays normales, los arrays de objetos tambien se pueden recorrer y manipular 
usando bucles y métodos de array*/
