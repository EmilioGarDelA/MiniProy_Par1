document.getElementById("botonJugar").addEventListener("click", function() {
    window.location.href = "juego.html";
});

const animales = [
    { nombre: "Perro", sonido: "Sonidos/Perro.mp3", imagen: "" },
    { nombre: "Gato", sonido: "", imagen: "" },
    { nombre: "Cerdo", sonido: "", imagen: "" },
    { nombre: "Lobo", sonido: "", imagen: "" },
    { nombre: "Pato", sonido: "", imagen: "" },
    { nombre: "Elefante", sonido: "", imagen: "" },
    { nombre: "Caballo", sonido: "", imagen: "" },
    { nombre: "Gallo", sonido: "", imagen: "" },
    { nombre: "Leon", sonido: "", imagen: "" },
];

// Función para reproducir un sonido
function reproducirSonido(nombreSonido) {
    const audio = new Audio(nombreSonido);
    audio.play();
}

// Ejemplo de uso
reproducirSonido('woof.mp3');


// Lógica del juego

// Función para iniciar el juego
function iniciarJuego() {
    const alias = document.getElementById('alias').value;
    // Verificar si el alias existe en el localStorage
    let jugador = JSON.parse(localStorage.getItem(alias));
    if (!jugador) {
        jugador = { alias: alias, puntos: 0, mejorTiempo: Infinity };
        localStorage.setItem(alias, JSON.stringify(jugador));
    }
    // Ocultar pantalla de inicio y mostrar pantalla de juego
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('juego').style.display = 'block';
    // Iniciar lógica del juego
}

// Resto de la lógica del juego...
