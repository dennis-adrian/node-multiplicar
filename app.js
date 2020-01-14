//-------------------requiereds
const colors = require('colors');

const argv = require('./config/yargs').argv;

const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');

// const multiplicar = require('./multiplicar/multiplicar');

// let base = 11;

// multiplicar.funcion2();
// multiplicar.funcion1(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(error => console.log(error));

//let argv2 = process.argv;

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log("===================================".trap);
        console.log(`=========Tabla del ${5}============`.rainbow);
        console.log("===================================".inverse);

        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ` + `${archivo}`.green))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
        break;
};


// let base = parametro[2].split("=")[1];
//con esta linea divido los datos capturados en "parametro" al momento del "="
//y obtengo el segundo valor(por el indice 1) 


// console.log(base);