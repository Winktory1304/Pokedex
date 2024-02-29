let morePokemonToLoad = 20;
let currentPokemon;
let allPokemon = [];
let pokemonTypes = {
    'normal': { 'color': '#A8A878', 'img': '/img/normal.png' },
    'fire': { 'color': '#F08030', 'img': '/img/fire.png' },
    'water': { 'color': '#6890F0', 'img': '/img/water.png' },
    'electric': { 'color': '#F8D030', 'img':'/img/electric.png' },
    'grass': { 'color': '#78C850', 'img': '/img/grass.png' },
    'ice': { 'color': '#98D8D8', 'img': '/img/ice.png' },
    'fighting': { 'color': '#C03028', 'img': '/img/fighting.png' },
    'poison': { 'color': '#A040A0', 'img': '/img/poison.png' },
    'ground': { 'color': '#E0C068', 'img': '/img/ground.png' },
    'flying': { 'color': '#a890f0', 'img': '/img/flying.png' },
    'psychic': { 'color': '#f85888', 'img': '/img/psychic.png' },
    'bug': { 'color': '#a8b820', 'img': '/img/bug.png' },
    'rock': { 'color': '#b8a038', 'img': '/img/rock.png' },
    'ghost': { 'color': '#705898', 'img': '/img/ghost.png' },
    'dragon': { 'color': '#7038f8', 'img': '/img/dragon.png' },
    'dark': { 'color': '#705949', 'img': '/img/dark.png' },
    'steel': { 'color': '#b8b8d0', 'img': '/img/steel.png' },
    'fairy': { 'color': '#f0b6bc', 'img': '/img/fairy.png' },
    'stellar': { 'color': '#f0b6bc', 'img': '/img/stellar.png' }
};



async function init() {
    await loadPokemon(0);
    // await renderPokemonInfo();
    await render();
}


async function loadPokemon(j) {
    document.getElementById('pokemonContent').innerHTML = '';
    for (let i = 0; i <= 19 + j; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        
        allPokemon.push(currentPokemon);
        render(i, i);
        
    }
}

function render(indexOfPokemon, i) {
    
    let currentPokemon = allPokemon[indexOfPokemon];
    let renderPokemonIndex = currentPokemon['id']
    let renderTypesAmount = currentPokemon['types'];
    let renderPokemonType1 = currentPokemon['types']['0']['type']['name'];
    let renderPokemonType2 = '';
    let type2Img = '';
    //Überprüfen, ob renderPokemonType2 einen Typ besitzt
    if (renderTypesAmount.length > 1) {
        renderPokemonType2 = currentPokemon['types']['1']['type']['name']
    }
    // Überprüfe, ob renderPokemonType2 einen Wert hat
    if (renderPokemonType2) {
        // Wenn renderPokemonType2 einen "truthy" Wert hat, erstelle das Bild-Tag für den zweiten Typ
        type2Img = `<img class="typeLogo mt-16px p-border" alt="${renderPokemonType2}" src='${pokemonTypes[renderPokemonType2].img}'></img>`
    } else {
        type2Img = '';
    }
    // Img wird mit Daten Attributen versheen die in der der renderDetailView wieder aufgerufen werden
    document.getElementById('pokemonContent').innerHTML +=
        /*html*/`<div class="main-card">
                    <div id="pokedex${i}" class="pokedex">
                        <h1 class="pokemon-name">${currentPokemon['name']}</h1>
                        <img id="pokekomPicture${indexOfPokemon}" class="pokemonPicture" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}" onclick="renderDetailView(${indexOfPokemon + 1})">      
                    </div>
                    <div class="info-container">
                    <div class="types">                        
                        <img class="typeLogo mt-16px p-border" alt="${renderPokemonType1}" src='${pokemonTypes[renderPokemonType1].img}'>
                        ${type2Img}                       
                    </div>
                    <div class="number-container">#${renderPokemonIndex}</div>
                    <div class="more-information">Click Pokemon for more informations</div>
                </div>`;
    // Hintergrundfarbe wird nach Type angepasst
    document.getElementById(`pokedex${indexOfPokemon}`).style.backgroundColor = pokemonTypes[renderPokemonType1].color;
}

function load20More(){
    morePokemonToLoad += 20;
    document.getElementById('pokemonContent').innerHTML ='';
    allPokemon=[];
    loadPokemon(morePokemonToLoad);
}



function backToPage(i) {
    document.getElementById(`detailView${i}`).classList.add('d-none');
}

