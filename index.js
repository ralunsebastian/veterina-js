const fs = require("fs");

const { registrar, leer } = require("./operaciones");

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
    registrar(nombre, edad, tipo, color, enfermedad);
}

if (operacion === "leer") {
    leer();
}
