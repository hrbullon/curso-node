/**
 * Async y Await
 */

let getNombre = () => {
    return new Promise( (resolve, reject) => {
        
        setTimeout(() => {
            resolve('Haderson');
        }, 3000);
        
    });
}

let saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}

saludo().then( mensaje => {
    console.log(mensaje);
}).catch( err => {
    console.log('Error de ASYNC ', err);
});



