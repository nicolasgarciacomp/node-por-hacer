const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer.js');
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
	break;

	case 'listar':
		let listado = porHacer.getListado();
		for(let tarea of listado) {
			console.log('##### Por Hacer #####'.green);
			console.log(tarea.descripcion);
			console.log('Estado: ', tarea.completado);
		}
	break;

	case 'actualizar':
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
	break;

	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion);
	break;

	default:
		console.log('El comando no es reconocido');
}
