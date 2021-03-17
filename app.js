const { crearTabla } = require('./helpers/multiplicar')

console.clear();

const argv = require('./config/yargs');

crearTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));