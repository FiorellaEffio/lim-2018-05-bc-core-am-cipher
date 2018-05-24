var answer = parseInt(prompt("¿Que es lo que deseas hacer? \n 1.Cifrar \n 2.Descifrar"));
var word = prompt("Ingrese el texto:");
var offset = parseInt(prompt("Ingrese el numero de espacios:"));

if(answer === 1){
     (cipher.createCipherWithOffset(offset)).encode(word);
}
if(answer === 2){
     (cipher.createCipherWithOffset(offset)).decode(word);
}
