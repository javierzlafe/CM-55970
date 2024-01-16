

                                          //OBJETOS


//EVOLUCION DE OBJETOS EN JAVASCRIPT

/*los objetos en JavaScript fueron evolucionando para meter funcionalidades más avanzadas,
que permite a los desarrolladores crear aplicaciones más complejas y sofisticadas. pero usando menos codigo
 */

//OBJETOS LITERALES


const empleado1={
    nombre: "javier",
    cargo: "profesor",
    ingreso : "2021-03-25",   // formato ISO, formato internacional.  (como en el imput date tipe de html)
    edad : 31,
}

const empleado2={
    nombre: "azul",
    cargo: "alumna",
    ingreso : "2021-03-25", 
    edad : 20,
}

                console.log(empleado1.nombre.length)
                console.log(empleado1.length)  //tira undefined, necesito especificar a que le estoy pegando


//problema de limitacion en los años 2000

                    const empleado3 = empleado1

//hago una copia de empleado 1, pero si le cambio algo al 3, cambia en el 1




//OBJETO CONSTRUCTOR o tambien conocido como FUNCIONES CONSTRUCTORAS

/*                 function Producto (id, nombre, importe, stock){  //primera inicial con mayuscula para diferenciar
                    this.id = id
                    this.nombre = nombre
                    this.importe = importe
                    this.stock = stock
                } */


/*                 const producto1 = new Producto (1, "teclado", 1500, 50)
                const producto2 = new Producto (1, "mouse", 800, 20)
                const producto3 = new Producto (1, "monitor", 40000, 10) */


//METODOS
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
      
    }
  }
  
  // Crear dos instancias del objeto Persona
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("Maria", 25);
  
  // Llamar al método saludar de las instancias creadas
  persona1.saludar(); // Imprime "Hola, mi nombre es Juan y tengo 30 años."
  persona2.saludar(); // Imprime "Hola, mi nombre es Maria y tengo 25 años."


       

                                //CLASES



/* 
la principal diferencia entre una función constructora y una clase es la sintaxis 
que se usa para definir y crear los objetos. Las funciones constructoras son más viejas y 
tenemos que usar la palabra clave new, mientras que las clases son más modernas y fáciles de leer 
*/





/* Supongamos que tenemos un objeto con información de una persona:
*/
const persona = {
    nombre: "Juan",
    edad: 30,
    hobbies: ["correr", "leer", "viajar"],
    direccion: {
      calle: "Av. Libertador",
      numero: 1234,
      ciudad: "Buenos Aires"
    }
  };
  /*
  Para convertir este objeto a una cadena de texto en formato JSON, utilizamos JSON.stringify() 
  de la siguiente manera:
  */
  
  const personaEnJSON = JSON.stringify(persona);
  /* Esto convierte el objeto persona en una cadena de texto en formato JSON, 
  y lo guarda en la variable personaEnJSON. Si imprimimos personaEnJSON en la consola, veremos lo siguiente:
  */
  
  '{"nombre":"Juan","edad":30,"hobbies":["correr","leer","viajar"],"direccion":{"calle":"Av. Libertador","numero":1234,"ciudad":"Buenos Aires"}}'
  
  /* Ahora queremos convertir esta cadena de texto en formato JSON de vuelta a un objeto. 
  Para hacerlo, utilizamos JSON.parse() de la siguiente manera:
  
  */
  const personaDesdeJSON = JSON.parse(personaEnJSON);
  /* Esto convierte la cadena de texto personaEnJSON en un objeto, y lo guarda en la variable personaDesdeJSON. 
  Si imprimimos personaDesdeJSON en la consola, veremos que es el mismo objeto que teníamos originalmente:
  */
  let personita={
    nombre: "Juan",
    edad: 30,
    hobbies: ["correr", "leer", "viajar"],
    direccion: {
      calle: "Av. Libertador",
      numero: 1234,
      ciudad: "Buenos Aires"
    }
  }
 