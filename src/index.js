let string, offset;
const changeText = function () {
  string = document.getElementById('textValue').value;
}
const changeOffset = function () {
  offset = parseInt(document.getElementById('offsetValue').value)%26;
}
const buttonCipher = function () {
  document.getElementById('result').value = cipher.createCipherWithOffset(offset).encode(string);
}
const buttonDecipher = function () {
  document.getElementById('result').value = cipher.createCipherWithOffset(offset).decode(string);
}
const resetValues = function () {
  document.getElementById('textValue').value = '';
  document.getElementById('offsetValue').value = '';
  document.getElementById('result').value = '';
}
const copyResult = function () {
  /* Get the text field */
  var copyText = document.getElementById("result");
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("copy");
}
document.getElementById('textValue').addEventListener("change", changeText);
document.getElementById('offsetValue').addEventListener("change", changeOffset);
document.getElementById('buttonCipher').addEventListener("click", buttonCipher);
document.getElementById('buttonDecipher').addEventListener("click", buttonDecipher);
document.getElementById('buttonReset').addEventListener("click", resetValues);
document.getElementById('buttonCopy').addEventListener("click", copyResult);
