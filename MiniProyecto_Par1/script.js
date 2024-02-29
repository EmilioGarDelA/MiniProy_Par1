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

function reproducirSonido(nombreSonido) {
    const audio = new Audio(nombreSonido);
    audio.play();
}

// Ejemplo de uso
reproducirSonido('Perro.mp3');