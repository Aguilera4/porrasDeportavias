var apuesta = require("./Apuesta.js"),
assert= require("assert");

var nueva_apuesta = new apuesta.Apuesta('Granada','Valencia','2-1');
assert(nueva_apuesta, "Creada apuesta");
assert.equal(nueva_apuesta.as_string(), "Equipo local: Granada vs Equipo visitante: Valencia, Resultado: 2-1","Creado 1");
assert.equal(nueva_apuesta.ver_equipos_local_visitante(), "El equipo local es Granada y el equipo visitante es Valencia","Comprueba distintos 1");

var nueva_apuesta2 = new apuesta.Apuesta('Madrid','Betis','5-1');
assert(nueva_apuesta2, "Creada apuesta");
assert.equal(nueva_apuesta2.as_string(), "Equipo local: Madrid vs Equipo visitante: Betis, Resultado: 5-1","Creado 2");
assert.equal(nueva_apuesta2.ver_equipos_local_visitante(), "El equipo local es Madrid y el equipo visitante es Betis","Comprueba distintos 2");


console.log("Si has llegado aquí, han pasado todos los tests");