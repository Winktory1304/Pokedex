let morePokemonToLoad = 20;
let currentPokemon;
let allPokemon = [];
let allPokemonNames = []; // Dieses Array wird die Namen aller Pokémon speichern
let pokemonTypes = {
    'normal': { 'color': '#A8A878', 'img': '/img/normal.png' },
    'fire': { 'color': '#F08030', 'img': '/img/fire.png' },
    'water': { 'color': '#6890F0', 'img': '/img/water.png' },
    'electric': { 'color': '#F8D030', 'img': '/img/electric.png' },
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
    showLoadingScreen();   
    // Simuliere das Laden von Daten mit einer Verzögerung
    await new Promise(resolve => setTimeout(resolve, 2000)); // Angenommen, hier werden Daten geladen
    hideLoadingScreen();
    await loadPokemon(0);
    // await renderPokemonInfo();
    await render();
}


function showLoadingScreen() {
    document.getElementById('loadingScreen').style.display = 'block';
}


function hideLoadingScreen() {
    document.getElementById('loadingScreen').style.display = 'none';
}


async function loadPokemon(twentyMore) {
    if (twentyMore === 0) {
        document.getElementById('pokemonContent').innerHTML = ''; // Inhalt nur beim initialen Laden löschen
        allPokemon = []; // Array nur beim initialen Laden zurücksetzen
    }
    let start = allPokemon.length + 1; //Starte beim nächsten Pokémon nach dem letzten geladenen
    let end = start + 19; // Lade 20 neue Pokémon
    for (let i = start; i <= end + twentyMore; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
        render(currentPokemon, allPokemon.length - 1);
    }
}


function render(pokemon, index) {
    let { renderPokemonType1, renderPokemonType2, type2Img } = checkHowManyTypes(pokemon, pokemonTypes);
    let pokemonContent = createPokemonContent(pokemon, index, pokemonTypes, renderPokemonType1, renderPokemonType2, type2Img);
    document.getElementById('pokemonContent').innerHTML += pokemonContent;
    // Hintergrundfarbe wird nach Type angepasst
    document.getElementById(`pokedex${index}`).style.backgroundColor = pokemonTypes[renderPokemonType1].color;

}


function checkHowManyTypes(pokemon, pokemonTypes) {
    let renderTypesAmount = pokemon['types'];
    let renderPokemonType1 = pokemon['types']['0']['type']['name'];
    let renderPokemonType2 = '';
    let type2Img = '';
    //Überprüfen, ob renderPokemonType2 einen Typ besitzt
    if (renderTypesAmount.length > 1) {
        renderPokemonType2 = pokemon['types']['1']['type']['name']
        type2Img = `<img class="typeLogo mt-16px p-border" alt="${renderPokemonType2}" src='${pokemonTypes[renderPokemonType2].img}'></img>`
    }
    return { renderPokemonType1, renderPokemonType2, type2Img }
}


function createPokemonContent(pokemon, index, pokemonTypes, renderPokemonType1, renderPokemonType2, type2Img) {
    // Img wird mit Daten Attributen versheen die in der der renderDetailView wieder aufgerufen werden
    let htmlPokemonContent =
    /*html*/`<div class="main-card">
                <div id="pokedex${index}" class="pokedex">
                    <h1 class="pokemon-name">${pokemon['name']} #${index + 1}</h1>
                    <img id="pokekomPicture${index}" class="pokemonPicture" src="${pokemon['sprites']['other']['dream_world']['front_default']}" onclick="renderDetailView(${index + 1})">      
                </div>
                <div class="info-container">
                <div class="types">
                    <div class="type1-main">                        
                        <img class="typeLogo mt-16px p-border" alt="${renderPokemonType1}" src='${pokemonTypes[renderPokemonType1].img}'><div class="type1-child">${renderPokemonType1}</div>
                    </div>
                    <div class="type1-main">
                        ${type2Img}<div class="type1-child">${renderPokemonType2}</div> 
                    </div>                      
                </div>                 
            </div>`;
    return htmlPokemonContent;
}


function load20More() {
    loadPokemon(20);
}


function backToPage(i) {
    document.getElementById(`detailView${i}`).classList.add('d-none');
}


function searchPokemonInput() {
    let pokemonInput = document.getElementById('pokemonSearchInput').value;
    pokemonInput = pokemonInput.toLowerCase(); // Alles wird in lowerCase String convertiert
    if (pokemonInput.length >= 2 && /^[a-zA-Z]+$/.test(pokemonInput)) { //check ob Input mehr als drei Zeichen hat und nur aus Buchstaben besteht 
        searchPokemon(pokemonInput);
    } else {
        loadPokemon(0);
    }
}


function searchPokemon(pokemonName) {
    let pokemonContentElement = document.getElementById('pokemonContent');
    pokemonContentElement.innerHTML = '';
    let foundPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
    if (foundPokemon.length > 0) {
        foundPokemon.forEach(pokemon => {
            render(pokemon, allPokemon.indexOf(pokemon)); // Verwende die vorhandene render Funktion, um jedes gefundene Pokémon anzuzeigen
        });
    } else {
        pokemonContentElement.innerHTML = `<p>Kein Pokémon mit dem Namen "${pokemonName}" gefunden.</p>`; // Zeige eine Nachricht an, wenn kein Pokémon gefunden wurde
    }

}


