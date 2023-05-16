// Interaccion 1
console.log('Interaccion 1');
const maxOfTwoNumbers = (nUno,nDos) => {
  // 1 resutado
if (nUno>nDos) {
  return nUno;
}
else {
  return nDos
}
};

console.log(maxOfTwoNumbers(5,15));

// Interaccion 2
console.log('Interaccion 2');
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = (matrizpalabras) => {
  let palabraMasLarga = '';
  for (let i = 0; i < matrizpalabras.length; i++) {
    if(palabraMasLarga.length < matrizpalabras[i].length){
      palabraMasLarga = matrizpalabras[i];
    }
  }
 return palabraMasLarga;
};
console.log(findLongestWord(words));

// Interaccion 3 
console.log('Interaccion 3');
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers=(sumaNumeros)=> {
  let suma = 0;
  for (let i = 0; i < sumaNumeros.length; i++) {
    suma += sumaNumeros[i];
  }
  return suma;
};
console.log(sumNumbers(numbers));

// Interaccion 3.1
console.log('Interaccion 3.1');
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

const sum =(sumaNyL)=>{
  let sumatotal = 0;
 for (let i = 0; i < sumaNyL.length; i++) {
  let elemento = sumaNyL[i];
  if (typeof elemento === 'string') {
    sumatotal+=elemento.length
  }
  else if (typeof elemento === true) {
    sumatotal += 1
  }
  else if(typeof elemento === 'objeto'&& elemento !== null){
    throw new Error('no aceptamos objetos')
  }
  else{
    sumatotal += elemento 
  }
 }  
 return sumatotal
};
console.log(sum(mixedArr));

// Interaccion 4.1
console.log('Interaccion 4.1');
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers= (Anumeros) => {

  let sumatotal= 0;

  for (let i = 0; i < Anumeros.length; i++) {
    sumatotal += Anumeros[i]; 
  }
  console.log(sumatotal/Anumeros.length);
  return sumatotal / Anumeros.length;
};
averageNumbers(numbersAvg);


// Interracion 4.2
console.log('Interracion 4.2');
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const averageWordLength= (palabras)=> {
  let totalsuma = 0
  for (let i = 0; i < palabras.length; i++) {
    totalsuma += palabras[i].length
  }
  let operacionmatematica = totalsuma / palabras.length;
  console.log(operacionmatematica);
 };
averageWordLength(wordsArr);


// Interaccion 5
console.log('Interaccion 5');
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

const uniquifyArray = (wordsarray)=> {
  let arraylimpia = []
  for (let i = 0; i < wordsarray.length; i++) {
    if(arraylimpia.indexOf( wordsarray[i]) === -1){
      arraylimpia.push(wordsarray[i])
    }
  }
  console.log(arraylimpia);
  return arraylimpia
};
uniquifyArray(wordsUnique);


// Interaccion 6
console.log('Interaccion 6');
console.log(' ');
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}



// Interaccion 7
console.log('Interaccion 7');
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes  (verificar, palabra) {
  let total = 0;
  verificar.forEach((elemento) => {
    if( elemento === palabra){
      total++;
    }
  });
  console.log(total);
  return total;
}
howManyTimes(wordsCount,'matter');
