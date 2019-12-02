//Incluye el paquete file system
const fs = require('fs');

//Tipos de requires
//const fs = require('fs') Nativos
//const fs = require('fs') Externos
//const fs = require('./fs') Creados por nosotros mismos

let borrarArchivos = () => {
    //Función para leer archivos de un directorio
    fs.readdir('./tablas/', ( err, files ) => {
        //Recorro todos los archivos encontrados
        files.forEach(file => {
            //Elimino cada archivo
            fs.unlink(`./tablas/${file}`, ( err ) => {

                if ( err ){
                    throw new Error(`No se ha podido eliminar el archivo ${eliminado}`);
                }
            });

            console.info(`Se han eliminado el archivo ${file}`);
        });
    });
}

let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = async (base, limite) => {

    if ( !Number(base)) {
        throw new Error(`La base ${ base } no es un número válido`);
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${base*i} \n`;
    }

    //Primer parametro nombre del archivo
    //Segundo paramtro dato a escribir en el archivo
    fs.writeFile(`./tablas/tabla-${ base }.txt`, data , (err) => {
        if (err) throw new Error(`No se ha podido crear el archivo tabla-${ base }.txt`);
    });

    return `tabla-${ base }.txt`;
}

module.exports = { crearArchivo, listarTabla, borrarArchivos };
