/*let name = "Mauricio";
let mensaje;
let edadS = prompt("Introduzca su edad");

let edadI =parseInt(edadS);


function drink(){
    
    if (edadI < 18){
        return "Coca"}
    else{
        return "Cerveza"
    }
}
let bebida = drink();

mensaje = `Hola, mi nombre es ${name}. Y me gusta tomar ${bebida}`
18

console.log(mensaje)*/

function tomarBebida() {

    let edadString = prompt("Introduzca su edad");

    let nombre = prompt('Introduzcase');

    let edadInt = parseInt(edadString);

    let bebida = ""

    if (edadInt < 18) {
        bebida = "Coca"}
    else{
        bebida = 'Cerveza'
    }

    mensaje = `Hola, mi nombre es ${nombre}. Y me gusta tomar ${bebida}`

    console.log(mensaje)

};

let trago = tomarBebida();
/*este segundo método, deja demostrado que se puede incluir todas las
variables dentro de función. ADEMAS SE AGREGO UN INPUT 
PARA EL CONDICIONAL*/