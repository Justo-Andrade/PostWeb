function esDiaONoche() {
    const ahora = new Date(); // Obtiene la fecha y hora actual
    const hora = ahora.getHours(); // Obtiene solo la hora (de 0 a 23)

    // Configuración de horarios
    const inicioDia = 6;  // 6 AM
    const inicioNoche = 18; // 6 PM

    // Verifica si es de día o de noche
    if (hora >= inicioDia && hora < inicioNoche) {
        return "INT - POST PRODUCCIONES - DÍA";
    } else {
        return "INT - POST PRODUCCIONES - NOCHE";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const momento = esDiaONoche();
    const element = document.getElementById("main-title");
    element.textContent = momento;
});