let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 41},
    {nombre: "Ana", telefono: "911223344", edad: 36},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];

let nuevaPersona = (persona) => {
    return new Promise((resolve, reject) => {
        if (persona.telefono == null) {
            persona.telefono = "";
        };

        datos.push(persona);

        resolve(datos); // resulve la promesa con los datos actualizados 
    })
};

let borrarPersona = (telefonoABuscar) => {
    return new Promise ((resolve, reject) => {
        datos = datos.filter(persona => persona.telefono != telefonoABuscar);
        resolve(datos);
    });
};

nuevaPersona({nombre: "Juan", telefono: "965661564", edad: 60})
    .then((datosActualizados) => {
        console.log("Datos actualizados: ", datosActualizados);
    })
    .catch((error) => {
        console.log("Ocurrió un error: ", error);
    });

nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20})
    .then((datosActualizados) => {
        console.log("Datos actualizados: ", datosActualizados);
    })
    .catch((error) => {
        console.log("Ocurrió un error: ", error);
    });


borrarPersona("910011001")
    .then((datosActualizados) => {
        console.log("Datos actualizados: ", datosActualizados);
    })
    .catch((error) => {
        console.log("Ocurrió un error: ", error);
    });

console.log(datos);