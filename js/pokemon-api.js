const pokemonContainer = document.getElementById('pokemon-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentPokemon = 1;
nextBtn.addEventListener('click', () => {
    if (currentPokemon < 50){
        currentPokemon++
    }else{
        currentPokemon = 1;
    }
    getPokemon(currentPokemon);
})
prevBtn.addEventListener('click', () => {
    if (currentPokemon > 1){
        currentPokemon--
    }else{
        currentPokemon = 50;
    }
    getPokemon(currentPokemon);
})

getPokemon(currentPokemon);
async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try{
        const response = await fetch(url, {
            method: 'GET',
        })
        const data = await response.json();
        pokemonContainer.innerHTML = `
            <h2 class="text-xl font-bold">${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}" class="w-40 h-40">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <p>Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        `;
        console.log(data.species.name);
    }catch(error){
        console.log(error);
    }
}