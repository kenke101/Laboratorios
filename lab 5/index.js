// Js Miguel sanz
let hacker1 = "Miguel";
let hacker2 = "Diego";
let nuevo = " ";

console.log(`El nombre del conductor es ${hacker1}`);
console.log(`El nombre del navegante es ${hacker2}`);

console.log(hacker1.length);
console.log(hacker2.length);

console.log("--Cual variable tiene el nombre mas largo--");

if (hacker1.length > hacker2.length) {
    console.log(`El conductor ${hacker1} tiene el nombre mas largo y tiene ${hacker1.length} caracteres.`
    );
}

else if (hacker1.length < hacker2.length) {
    console.log(`Parece que el navegante ${hacker2} tiene el nombre mas largo, tiene ${hacker2.length} caracteres.`
    );   
}
else{
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`);
}

for (let indice = 0; indice < hacker1.length; indice++) {
    nuevo += hacker1[indice].toUpperCase() + " ";   
}
console.log(nuevo);

console.log(hacker2.split("").reverse().join(" ").toUpperCase());

let conductor1=""
let navegador1="John"
if(conductor1<navegador1){
    console.log("El nombre del conductor va primero");
}
else if (conductor1>navegador1){
    console.log("Yo, el navegador va primero definitivamente.");
}
else {
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}

let n_conductor="John"
let n_navegador=""
if(n_conductor<n_navegador){
    console.log("El nombre del conductor va primero");
}
else if(n_conductor>n_navegador){
    console.log("Yo, el navegador va primero definitivamente.");
}
else{
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}

let x_conductor="John"
let x_navegador="John"
if(x_conductor<x_navegador){
    console.log("El nombre del conductor va primero");
}
else if(x_conductor>x_navegador){
    console.log("Yo, el navegador va primero definitivamente.");
}
else {
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}