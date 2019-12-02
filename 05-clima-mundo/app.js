const argv = require('yargs').options({
    direccion:{
        demand:true,
        alias:'d',
        desc:'Nombre de la ciudad que quiero saber el clima'
    }
}).argv

console.log(argv.direccion);