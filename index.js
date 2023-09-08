document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('boton');
    const pokemonNombre = document.getElementById('pokemonNombre');
    const pokemonImagen = document.getElementById('spry');
    const pokemonNombreTexto = document.getElementById('pokemonNombreTexto');
    const pokemonTipo = document.getElementById('pokemonTipo');
    const pokemonAltura = document.getElementById('pokemonAltura');
    const pokemonPeso = document.getElementById('pokemonPeso');

    boton.addEventListener('click', function () {
        const name = pokemonNombre.value.toLowerCase();

        if (name) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(response => response.json())
                .then(data => {
                    pokemonImagen.src = data.sprites.front_default;
                    pokemonNombreTexto.textContent = data.name;
                    const types = data.types.map(type => type.type.name).join(', ');
                    pokemonTipo.textContent = `Tipo(s): ${types}`;
                    pokemonAltura.textContent = `Altura: ${data.height / 10} m`; // Convertir a metros
                    pokemonPeso.textContent = `Peso: ${data.weight / 10} kg`; // Convertir a kilogramos
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('No se encontró un Pokémon con ese nombre.');
                });
        }
    });
});
