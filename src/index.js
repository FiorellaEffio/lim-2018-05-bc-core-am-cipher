var string, offset;
document.getElementById('texto').addEventListener("change", cambiartexto);
document.getElementById('espacios').addEventListener("change", cambiaroffset);
document.getElementById('boton1').addEventListener("click", ciframe);
document.getElementById('boton2').addEventListener("click", desciframe);

const cambiartexto = function () {
  string = document.getElementById('texto').value;
}
const cambiaroffset = function () {
  offset = parseInt(document.getElementById('espacios').value)%26;
}
const ciframe = function () {
  document.getElementById('resultado').innerHTML = (cipher.createCipherWithOffset(offset)).encode(string);
}
const desciframe = function () {
  document.getElementById('resultado').innerHTML = (cipher.createCipherWithOffset(offset)).decode(string);
}
