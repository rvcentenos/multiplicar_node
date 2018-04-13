const argv = require('./config/yargs').argv;
const colors = require('colors');

const { listarTabla } = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');

let command = argv._[0];
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limit)
            .then(tabla => console.log(tabla.green))
            .catch(e => { console.log(e); });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limit)
            .then(archivo => console.log(`Archivo creado: `, archivo.blue))
            .catch(e => { console.log(e); });

        break;
    default:
        console.log('Comando no reconocido');
}