document.addEventListener("DOMContentLoaded", function() {
    // Obtén referencias a los elementos
    var contenidoElement = document.querySelector(".background-text h1");

    // Define las frases relacionadas con la venta de joyería
    var frases = [
        "Explora la sofisticación de nuestros diseños únicos.",
        "Brilla con la pureza de nuestros diamantes.",
        "Encuentra la joya perfecta para cada ocasión.",
        "Eleva tu elegancia con nuestras creaciones a medida.",
        "Descubre la magia de la orfebrería fina.",
        "Adorna tu vida con nuestras joyas de alta calidad.",
        "Cautiva con la belleza atemporal de nuestras piezas.",
        "Expresa tu amor con un regalo que perdurará para siempre.",
        "Sumérgete en la exclusividad de nuestras colecciones.",
        "Deja que nuestras joyas cuenten tu historia única."
    ];

    // Función para cambiar el contenido al azar
    function cambiarContenido() {
        var indice = Math.floor(Math.random() * frases.length);
        contenidoElement.textContent = frases[indice];
    }

    // Asocia la función al evento de clic del botón
    var botonContacto = document.querySelector(".button");
    botonContacto.addEventListener("click", cambiarContenido);
});