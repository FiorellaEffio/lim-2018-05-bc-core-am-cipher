window.cipher = {
  encode : (offset, string) => {
    //stringArray almacena nuestro string como un array ejemplo string ="hola", stringArray = ['h','o','l','a']
    let stringArray = string.split("");
    //inicializamos la variable cipherText para que no nos devuelva undefined
    let cipherText ="";
    for(let i = 0; i < stringArray.length; i++) {
      let arrayLetterAscii = stringArray[i].charCodeAt(0);

      if(arrayLetterAscii >= 65 && arrayLetterAscii <= 90)
        {cipherText = cipherText + String.fromCharCode((arrayLetterAscii - 65 + offset) % 26 + 65);}
      else if (arrayLetterAscii >= 97 && arrayLetterAscii <= 122) {
        cipherText = cipherText + String.fromCharCode((arrayLetterAscii - 97 + offset) % 26 + 97);
      }
      else {
        cipherText = cipherText + stringArray[i];
      }
      }
    return cipherText;
  },
  decode : (offset, string) => {
    let stringArray = string.split("");
    let decipherText ="";
    for(let i = 0; i < stringArray.length; i++) {
      let arrayLetterAscii = stringArray[i].charCodeAt(0);
      if(arrayLetterAscii >= 65 && arrayLetterAscii <= 90)
        {decipherText = decipherText + String.fromCharCode(90 - (90 - arrayLetterAscii + offset) % 26);}
      else if (arrayLetterAscii >= 97 && arrayLetterAscii <= 122) {
        decipherText = decipherText + String.fromCharCode(122 - (122 - arrayLetterAscii + offset) % 26);
      }
      else {
        decipherText = decipherText + stringArray[i];
      }
      }
  return decipherText;
  },
  createCipherWithOffset : (offset) => {
    return window.cipher1 = {
      code1 : (string) => { return cipher.encode(offset, string); },
      code2 : (string) => { return cipher.decode(offset, string); }
    };
    }
};
