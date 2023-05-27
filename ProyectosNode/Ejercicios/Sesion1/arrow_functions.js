let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 41},
    {nombre: "Ana", telefono: "911223344", edad: 36},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];

let nuevaPersona = (persona) => {

    if (persona.telefono == null) {
        persona.telefono = "";
    };

    datos.push(persona)
};

let borrarPersona = (telefonoABuscar) => {
    datos = datos.filter(persona => persona.telefono != telefonoABuscar);
};

nuevaPersona({nombre: "Juan", telefono: "965661564", edad: 60});
nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20});
borrarPersona("910011001");
console.log(datos);
