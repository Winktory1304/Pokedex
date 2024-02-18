let currentPokemon;

async function init() {
  // await loadPokemon()
  // await renderPokemonInfo();
  await render();
}




async function render() {
  document.getElementById('pokemonContent').innerHTML = '';
  for (let i = 1; i < 8; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    let renderTypesAmount = currentPokemon['types'];
    let renderPokemonName = currentPokemon['name'];
    let renderPokemonPicture = currentPokemon['sprites']['other']['dream_world']['front_default'];
    let renderPokemonType1 = currentPokemon['types']['0']['type']['name'];
    let renderPokemonType2 = '';

    //Überprüfen, ob renderPokemonType2 einen Typ besitzt
    if (renderTypesAmount.length > 1) {
      renderPokemonType2 = currentPokemon['types']['1']['type']['name']

    }
    document.getElementById('pokemonContent').innerHTML +=
    /*html*/`<div class="main-card">
                <div id="pokedex">
                  <h1 class="pokemon-name" id="pokemonName">${renderPokemonName}</h1>
                </div>
                <div class="info-container">
                  <div class="types">
                  <p id="pokemonType1">${renderPokemonType1}</p><p id="pokemonType2">${renderPokemonType2}</p>
                  </div>
                  <img class="pokemonPicture" id="pokemonPicture" src="${renderPokemonPicture}" alt="">
                </div>
             </div>`;
  }
}