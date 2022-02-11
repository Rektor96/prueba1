/*function Buendia(){
    //let = horadedespertar
    //horadedespertar = hora0

    let hora0;
    hora0 = prompt("A que hora te despertaste wachin?", "");
    
    let hora1 = parseInt(hora0)

    let inscripcion

    if(hora1 < 12){
        inscripcion = "Buenos días";}
    else{
        inscripcion = "Buenas tardes";
    }
    let mensaje
    
    mensaje =`Hola Señor."${inscripcion}`
   
    console.log(mensaje)
}
let saludo = Buendia*/
let horadedespertar = new Date().setHours();

switch (true) {
    case (horadedespertar < 18):
        console.log("buenos días");
        break;
    case (horadedespertar < 20):
        console.log("buenas tardes");
        break;
    case (horadedespertar > 20):
        console.log("buenas noches");
        break;
}