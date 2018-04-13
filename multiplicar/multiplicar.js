// requires
const fs = require('fs');

let listarTabla = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        if (!Number(limit)) {
            reject(`El valor introducido ${ limit } no es un número.`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data);
    })
};

let crearArchivo = (base, limit = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        if (!Number(limit)) {
            reject(`El valor introducido ${ limit } no es un número.`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${ base }.txt`);
        });

    })
};

module.exports = {
    listarTabla,
    crearArchivo
}