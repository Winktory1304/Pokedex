let currentPokemon;


async function loadPokemon(){
let url ='https://pokeapi.co/api/v2/pokemon/charmander';
let response = await fetch(url);
currentPokemon = await response.json();

renderPokemonInfo();
console.log('Loaded pokemon', currentPokemon);
}

function renderPokemonInfo(){
  document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
  document.getElementById('pokemonPicture').src = currentPokemon['sprites']['front_shiny'];

}