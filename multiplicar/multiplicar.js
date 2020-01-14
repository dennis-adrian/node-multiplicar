const fs = require('fs');

//al poner limite = 10, simplemente estamos dando un valor por defecto
//algo que es permitido con ECMAScript 6
let listarTabla = (base, limite = 10) => {
    let data = "";
    for (let i = 1; i <= limite; i++) {
        data += (`${base} * ${i} = ${base * i}\n`);
    };
    console.log(data);
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número`);
            return;
            //el return es para que al momento de ejecutarse el reject
            //no siga la función
        }
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        };
        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla_${base}.txt`);
            }
        });
    })
};
module.exports = {
    crearTabla: crearArchivo,
    listarTabla
};