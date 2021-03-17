const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        describe: 'toma la base de la tabla',
        demandOption: true,

    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'mostrar la tabla',
        default: false
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'numero limite de la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv;


module.exports = argv;