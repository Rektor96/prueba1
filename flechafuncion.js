// let saludar= nombre =>{ document.write("Hola " + nombre +",como estas???")
// }
// saludar("Mauri")
let free = false;

const validarCliente = time=>{
    let edad = prompt("dime tu edad");
    if (edad > 18){
        if (time >= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis");
            free = true;
        } else{
            alert("Puede pasar pero debe abonar");
        }
    } else{
        alert("Usted no puede pasar, es menor de edad")}
}
validarCliente(2);
validarCliente(3);//puede pasar pero 
// debe pagar ya que paso una persona despues de las 2
validarCliente(24);
validarCliente(4);