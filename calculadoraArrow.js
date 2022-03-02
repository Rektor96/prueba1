const suma = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const resta = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const division = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicacion = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("Que operación vas a realizar???");
let operación = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if(operación == 1) {
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = suma(numero1,numero2)
    alert(`Tu resultado es ${resultado}`);
}
else if(operación == 2) {
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    resultado = resta(numero1,numero2)
    alert(`Tu resultado es ${resultado}`);
}
else if(operación == 3) {
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    resultado = division(numero1,numero2)
    alert(`Tu resultado es ${resultado}`);
}
else if(operación == 4) {
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("segundo número para multiplicar");
    resultado = multiplicacion(numero1,numero2)
    alert(`Tu resultado es ${resultado}`);
}
else{
    alert("Operación incorrecta")
}
