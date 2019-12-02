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

let getEmpleado = async ( id ) => { 

    let empleadoDB = empleados.find( empleado => empleado.id === id );

    if( !empleadoDB ){
        throw new Error(`No existe el empleado con el ID: ${id}`);
    }else{
        return empleadoDB;
    } 
};

let getSalario = async ( empleado ) => {

    let salarioDB = salarios.find( salario => salario.id === empleado.id); 

    if( !salarioDB ){
        throw new Error(`No se encontró un salario para el empleado: ${empleado.nombre}`);
    }else{
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

let getInformacion = async( id ) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${ resp.nombre } tiene un salario de ${ resp.salario }`;
};


getInformacion(1)
.then( msg => console.log(msg))
.catch( err => console.log(err));
