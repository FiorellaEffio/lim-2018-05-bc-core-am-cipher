let string, offset;
const changeText = function () {
  string = document.getElementById('textValue').value;
}
const changeOffset = function () {
  offset = parseInt(document.getElementById('offsetValue').value)%26;
}
const buttonCipher = function () {
  document.getElementById('result').innerHTML = cipher.createCipherWithOffset(offset).encode(string);
}
const buttonDecipher = function () {
  document.getElementById('result').innerHTML = cipher.createCipherWithOffset(offset).decode(string);
}
document.getElementById('textValue').addEventListener("change", changeText);
document.getElementById('offsetValue').addEventListener("change", changeOffset);
document.getElementById('buttonCipher').addEventListener("click", buttonCipher);
document.getElementById('buttonDecipher').addEventListener("click", buttonDecipher);
