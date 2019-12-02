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

let getEmpleado = ( id, callback ) => { 

    let empleadoDB = empleados.find( empleado => empleado.id === id );
    
    if( !empleadoDB ){
        callback(`No existe el empleado con el ID: ${id}`);
    }else{
        callback(null,empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find( salario => salario.id === empleado.id); 

    if( !salarioDB ){
        callback(`No se encontró un salario para el empleado: ${empleado.nombre}`);
    }else{
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        })
    }
}

getEmpleado(3, (err, empleado) => {
    
    if( err ){
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {

        if( err ){
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });
});