const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,  
    alias: 'c',
    desc: 'Marca como pendiente o completada la tarea'
};

const argv = require('yargs')
.command('listar', 'Devuelve un listado de tareas por hacer')
.command('crear', 'Registra una nueva tarea por hacer', {
    descripcion
})
.command('actualizar', 'Actualiza la información de una tarea por hacer', {
    descripcion,
    completado
})
.command('borrar', 'Borra una tarea por hacer', {
    descripcion
})
.help()
.argv;

module.exports = { argv };