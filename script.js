let currentPokemon;
let allPokemon = [];
let pokemonTypes = {
    'normal': '#A8A878',
    'fire': '#F08030',
    'water': '#6890F0',
    'electric': '#F8D030',
    'grass': '#78C850',
    'ice': '#98D8D8',
    'fighting': '#C03028',
    'poison': '#A040A0',
    'ground': '#E0C068',
    'flying': '#a890f0',
    'psychic': '#f85888',
    'bug': '#a8b820',
    'rock': '#b8a038',
    'ghost': '#705898',
    'dragon': '#7038f8',
    'dark': '#705949',
    'steel': '#b8b8d0',
    'fairy': '#f0b6bc',
    'stellar': '#f0b6bc'
};


async function init() {
    // await loadPokemon()
    // await renderPokemonInfo();
    await render();
}

async function render() {
    document.getElementById('pokemonContent').innerHTML = '';
    for (let i = 1; i < 5; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
        let renderPokemonIndex = currentPokemon['id']
        let renderTypesAmount = currentPokemon['types'];
        let renderPokemonType1 = currentPokemon['types']['0']['type']['name'];
        let renderPokemonType2 = '';

        //Überprüfen, ob renderPokemonType2 einen Typ besitzt
        if (renderTypesAmount.length > 1) {
            renderPokemonType2 = currentPokemon['types']['1']['type']['name']
        }
        // Img wird mit Daten Attributen versheen die in der der renderDetailView wieder aufgerufen werden
        document.getElementById('pokemonContent').innerHTML +=
        /*html*/`<div class="main-card">
                    <div id="pokedex${i}" class="pokedex">
                        <h1 class="pokemon-name">${currentPokemon['name']}</h1>
                        <img id="pokekomPicture${i}" class="pokemonPicture" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}" onclick="renderDetailView(${i})">      
                    </div>
                    <div class="info-container">
                    <div class="types">
                        <p class="mt-16px p-border">${renderPokemonType1}</p>
                        <p>${renderPokemonType2}</p>
                    </div>
                    <div class="number-container">#${renderPokemonIndex}</div>
                    <div class="more-information">Click Pokemon for more informations</div>
                </div>`;
        // Hintergrundfarbe wird nach Type angepasst
        document.getElementById(`pokedex${i}`).style.backgroundColor = pokemonTypes[renderPokemonType1];
    }
}



function backToPage() {
    document.getElementById('detailView').classList.add('d-none');
}

