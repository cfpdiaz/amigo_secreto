// Array para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios al inicio y final

    // Validar que el nombre no esté vacío y que solo contenga letras
    if (nombre === "" || !/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Validar que no se ingresen más de 9 nombres
    if (amigos.length >= 9) {
        alert("Solo se pueden ingresar hasta 9 nombres.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Mostrar el nombre en la lista
    const lista = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    // Limpiar el input
    input.value = "";
}

// Función para sortear un nombre aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe ingresar al menos un nombre antes de sortear.");
        return;
    }
    
    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el nombre sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
