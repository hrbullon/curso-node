const opts = {
    base:{
        demand:true,
        alias: 'b'
    },
    limite:{
        default:10,
        alias:'l'
    }
};

const argv = require('yargs')
.command('listar', 'Imprimer en consola la tabla de multiplicar', opts)
.command('crear', 'Crear un archivo txt con la tabla de multiplicar', opts)
.help()
.argv;

module.exports = { argv }
