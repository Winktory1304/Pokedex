let currentPokemon;

async function init() {
  // await loadPokemon()
  // await renderPokemonInfo();
  await render();
}




async function render() {
  document.getElementById('pokemonContent').innerHTML = '';
  for (let i = 1; i < 19; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    let renderPokemonName = currentPokemon['name'];
    let renderPokemonPicture = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('pokemonContent').innerHTML +=
    /*html*/`<div class="main-card">
                <div id="pokedex">
                  <h1 class="pokemon-name" id="pokemonName">${renderPokemonName}</h1>
                </div>
                <div class="info-container">
                  <img class="pokemonPicture" id="pokemonPicture" src="${renderPokemonPicture}" alt="">
                </div>
             </div>`;
  }
}