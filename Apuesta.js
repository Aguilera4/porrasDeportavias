exports.Apuesta = function(equipoLocal,equipoVisitante,resultado){
    this.equipoLocal = equipoLocal;
    this.equipoVisitante = equipoVisitante;
    this.resultado = resultado;

    this.as_string = as_string;
    this.ver_equipos_local_visitante = ver_equipos_local_visitante;
}


function as_string(){
    return "Equipo local: " + this.equipoLocal + " vs Equipo visitante: " + this.equipoVisitante + ", Resultado: " + this.resultado;
}

function ver_equipos_local_visitante(){
    return "El equipo local es " + this.equipoLocal + " y el equipo visitante es " + this.equipoVisitante;
}