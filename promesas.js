let empleados = [
    {
        id: 1,
        nombre: 'Haderson'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Andrés'
    },
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = ( id ) => { 

    return new Promise( (resolve, reject) => {
       
        let empleadoDB = empleados.find( empleado => empleado.id === id );
    
        if( !empleadoDB ){
            reject(`No existe el empleado con el ID: ${id}`);
        }else{
            resolve(empleadoDB);
        } 
    });
};

let getSalario = ( empleado ) => {

    return new Promise( (resolve, reject) => {
    
        let salarioDB = salarios.find( salario => salario.id === empleado.id); 

        if( !salarioDB ){
            reject(`No se encontró un salario para el empleado: ${empleado.nombre}`);
        }else{
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    });
}

//Llamado de promesas tradicional
getEmpleado(4).then( empleado => {

    getSalario(empleado).then( resp => {
        console.log(`El salario de ${ resp.nombre } es ${ resp.salario }`);
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});

//Llamado de promesas en cadena
getEmpleado(1).then( empleado => {
    return getSalario(empleado);
}).then( resp => {
    console.log(`El salario de ${ resp.nombre } es ${ resp.salario }`);
}).catch( err => console.log(err));


