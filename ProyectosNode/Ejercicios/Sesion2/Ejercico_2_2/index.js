const promesas = require('./promesas.js');

promesas.nuevaPersona({nombre: "Juan", telefono: "965661564", edad: 60})
    .then((datosActualizados) => {
        console.log("Datos actualizados: ", datosActualizados);
    })
    .catch((error) => {
        console.log("Ocurrió un error: ", error);
    });

promesas.nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20})
    .then((datosActualizados) => {
        console.log("Datos actualizados: ", datosActualizados);
    })
    .catch((error) => {
        console.log("Ocurrió un error: ", error);
    });


promesas.borrarPersona("910011001")
    .then((datosActualizados) => {
        console.log("Datos actualizados: ", datosActualizados);
    })
    .catch((error) => {
        console.log("Ocurrió un error: ", error);
    });

console.log(promesas.datos);