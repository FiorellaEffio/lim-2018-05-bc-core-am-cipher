var string, offset;
document.getElementById('texto').addEventListener("change", cambiartexto);
document.getElementById('espacios').addEventListener("change", cambiaroffset);
document.getElementById('boton1').addEventListener("click", ciframe);
document.getElementById('boton2').addEventListener("click", desciframe);
function cambiartexto() {
  string = document.getElementById('texto').value;
}
function cambiaroffset() {
  offset = parseInt(document.getElementById('espacios').value)%26;
}
function ciframe() {
  (cipher.createCipherWithOffset(offset)).code1(string);
}
function desciframe() {
  (cipher.createCipherWithOffset(offset)).code2(string);
}
