var assert = require("assert"),
apuesta = require(__dirname+"/Apuesta.js");

    describe('Apuesta', function(){
        // Testea que se haya cargado bien la librería
        describe('Carga', function(){
            it('should be loaded', function(){
                assert(apuesta, "Cargado");
            });
        });
        
        describe('Crea1', function(){
        it('should create apuestas correctly', function(){
            var nueva_apuesta = new apuesta.Apuesta('Granada','Valencia','2-1');
            assert.equal(nueva_apuesta.as_string(), "Equipo local: Granada vs Equipo visitante: Valencia, Resultado: 2-1","Creado");
        });
        });

        describe('VerEquipos1', function(){
            it('should show team correctly', function(){
                var nueva_apuesta = new apuesta.Apuesta('Granada','Valencia','2-1');
                assert.equal(nueva_apuesta.ver_equipos_local_visitante(), "El equipo local es Granada y el equipo visitante es Valencia","Comprueba distintos 1");
            });
        });

        describe('Crea2', function(){
            it('should create apuestas correctly', function(){
                var nueva_apuesta2 = new apuesta.Apuesta('Madrid','Betis','5-1');
                assert.equal(nueva_apuesta2.as_string(), "Equipo local: Madrid vs Equipo visitante: Betis, Resultado: 5-1","Creado");
            });
        });

        
        describe('VerEquipos2', function(){
            it('should show team correctly', function(){
                var nueva_apuesta2 = new apuesta.Apuesta('Madrid','Betis','5-1');
                assert.equal(nueva_apuesta2.ver_equipos_local_visitante(), "El equipo local es Madrid y el equipo visitante es Betis","Comprueba distintos 2");
            });
        });
    });