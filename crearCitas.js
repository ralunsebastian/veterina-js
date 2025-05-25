const fs = require("fs");

fs.writeFileSync("citas.json", "[]", "utf8");
console.log("Archivo citas.json creado con éxito.");
