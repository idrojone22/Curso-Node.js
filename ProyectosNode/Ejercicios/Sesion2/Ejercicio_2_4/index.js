const moment = require('moment');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa la fecha del hermano/a menor ("07/10/2016", "DD/MM/YYYY"): ', (fecha1) => {
    rl.question('Ahora ingresa la fecha del hermano mayor ("07/10/2016", "DD/MM/YYYY"): ', (fecha2) => {
        const momentFecha1 = moment(fecha1, 'DD/MM/YYYY');
        const momentFecha2 = moment(fecha2, 'DD/MM/YYYY');

        const diferenciaAnios = momentFecha1.diff(momentFecha2, 'years');

        console.log('La diferencia de tiempo entre los dos es de: ' + diferenciaAnios + ' años');
        rl.close();
    });
});
