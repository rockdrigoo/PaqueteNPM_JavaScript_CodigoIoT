process.stdin.resume();
process.stdin.setEncoding('ascii');
function saludar(nombre) {
   console.log('Hola ' + nombre);
}
function pedirNombre(callback) {
   console.log("Escribe tu nombre: ");
   process.stdin.on('data', function (line) {
      callback(line);
      process.exit();
   });
}
pedirNombre(saludar);