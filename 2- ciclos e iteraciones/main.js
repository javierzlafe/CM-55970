





/* let nombre = prompt("ingresa tu nombre")

if(nombre == "matias"){
    //lo que quiero ejecutar
    alert("bienvenido " + nombre)
}else if(nombre == "marcos"){
    alert("bienvenido " + nombre)
}else if(nombre == "azul"){
    alert("bienvenido " + nombre)
}else{
    alert("bienvenido, queres loguearte en la pagina?")
}
 */





/* let nombre  = prompt("Ingresar nombre");
let apellido = prompt("Ingresar apellido");

if(    (nombre !="") || (apellido !="")     ) {
    alert("Nombre: " + nombre + "\nApellido: " + apellido); 
} else {
    alert("Error: Ingresar nombre y apellido");
}
 */





/* 

producto
precio base
compradores
ofertar dinero
*/


/* alert("vendo algo, escucho ofertas")
let ofertaBase = 2000
let ofertaDelUsuario = prompt("ingresa tu oferta: ")
if(ofertaDelUsuario >= ofertaBase){
    alert("ahora te pongo el moño")
}else if(ofertaDelUsuario < ofertaBase && ofertaDelUsuario>= 1500){
    alert("estirate un poco mas pa")
}else if(ofertaDelUsuario < 1500){
    alert("toca de aca rata")
} */




//ESTRUCTURA DEL FOR

//for(inicio, limite o condicion, incremento)



/* for(let i=0; i<3; i++){
    alert("estoy contando hasta " + i)
}

 */




/* 
let iterar = false

while(iterar === true){
    console.log("al infinito y mas alla")
    iterar = confirm("queres seguir con el bucle?")
} */



/* usuario
comparar
intentos
 */

let intentos = 1
let identificar = true

do{
let usuario = prompt("ingresa tu usuario, (solo hay 3 intentos)")
if(usuario === ""){
    break
}
if(usuario === "javier gimenez" && intentos <=3){
    alert("bienvenido " + usuario)
    identificar = false
}else{
    alert("no se reconoce usuario: " + usuario)
    intentos++
    if(intentos <3){
        alert("usted supero los 3 intentos")
        break
    }
}
}

while(identificar)