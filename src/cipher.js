window.cipher = {
  encode : (offset, string) => {
    var array = string.split("");
    var cipher_word ="";
    var num;
    for(var i=0;i<array.length;i++) {
      var num_letra = array[i].charCodeAt(0);
      if(array[i] === " ")
        {cipher_word = cipher_word + " ";}
      if(num_letra>=65 && num_letra<=90)
        {num = 65;
         cipher_word = cipher_word + String.fromCharCode((num_letra - num + offset) % 26 + num);
        }
      if(num_letra>=97 && num_letra<=122)
        {num = 97;
      cipher_word = cipher_word + String.fromCharCode((num_letra - num + offset) % 26 + num);}
    }
    return cipher_word;
  },
  decode : (offset, string) => {
    var array = string.split("");
    var condition, num;
    var decipher_word ="";
    for(var i=0;i<array.length;i++) {
      var num_letra = array[i].charCodeAt(0);
      if(array[i] === " ")
        {decipher_word = decipher_word + " ";}
      if(num_letra>=65 && num_letra<=90)
        {num = 65;
          condition = (array[i].charCodeAt(0)-num) - offset;
          if(condition < 0){
              decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) +26 - offset));
          }
          else{
              decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) - num - offset ) % 26 + num);
          }
        }
      if(num_letra>=97 && num_letra<=122)
        {num = 97;
          condition = (array[i].charCodeAt(0)-num) - offset;
          if(condition < 0){
              decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) +26 - offset));
          }
          else{
              decipher_word = decipher_word + String.fromCharCode((array[i].charCodeAt(0) - num - offset ) % 26 + num);
          }
        }
  }
  return decipher_word;
  },
  createCipherWithOffset : (offset) => {
    return window.cipher1 = {
      code1 : (string) => { return cipher.encode(offset, string); },
      code2 : (string) => { return cipher.decode(offset, string); }
    };
    }
};
