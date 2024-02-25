function renderDetailView(i) {
  //Daten aus dem Bild wieder holen
  let element = document.getElementById(`pokekomPicture${i}`);
  let name = element.getAttribute('data-name');
  let picture = element.getAttribute('data-picture');
  let renderPokemonHP = element.getAttribute('data-PokemonHP ');
  let renderPokemonAttack = element.getAttribute('data-PokemonAttack');
  let renderPokemonDefence = element.getAttribute('data-PokemonDefence');
  let renderPokemonSpAttack = element.getAttribute('data-PokemonSpAttack');
  let renderPokemonSpDefence = element.getAttribute('data-PokemonSpDefence');
  let renderPokemonSpeed = element.getAttribute('data-PokemonSpeed');
  let renderPokemonWeight = element.getAttribute('data-PokemonWeight');
  let renderPokemonHeight = element.getAttribute('data-PokemonHeight');
  let PokemonTyp1DC = element.getAttribute('data-PokemonTyp1');
  let PokemonTyp2DC = element.getAttribute('data-PokemonTyp2');

  document.getElementById('pokemonContent').innerHTML +=
    /*html*/`
    <div id="detailView" class="detail-view">
    <nav class="NavDetailCard">
      <button type="button" onclick="backToPage()" class="btn btn-outline-light btn-sm mx-2 "><svg
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-arrow-left-short navBackArrow" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
        </svg><strong>BACK</strong></button>
      <p class="navPokedex mx-2 sticky-top">Pokedex</p>
    </nav>
    <div class="detail-view-child">
      <div class="dcName">${name}</div>
      <div class="mainInfoCaontainer">
        <div class="childInfocontainer1">
          <table class="InfoTable1">
            <thead>
            <tbody>
              <td>ID</td>
              <td>${i}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>${renderPokemonHeight}m</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>${renderPokemonWeight}kg</td>
              </tr>
              <tr>
                <td>Typ</td>
                <td>${PokemonTyp1DC} ${PokemonTyp2DC}</td>
              </tr>
              <tr>
            </tbody>
            </tr>
          </table>
        </div>
        <img class="childInfocontainer2" src="${picture}" alt="">
        <div class="childInfocontainer3">
          <table class="InfoTable1">
            <tbody>
              <tr>
                <td>HP</td>
                <td class="infoTable3">
                  <div class="progress witdh-100px">
                    <div id="progressBarHP" class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 55%"
                      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${renderPokemonHP}</div>
                  </div>
                  
                </td>
              </tr>
              <tr>
                <td>Attack</td>
                <td class="infoTable3">
                  <div class="progress">
                    <div id="progressBarAttack" class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%"
                      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${renderPokemonAttack}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Defence</td>
                <td class="infoTable3">
                  <div class="progress">
                    <div id="progressBarDefence" class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%"
                      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${renderPokemonDefence}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Sp.Attack</td>
                <td class="infoTable3">
                  <div class="progress">
                    <div id="progressBarSpAttack" class="progress-bar progress-bar-striped bg-warning " role="progressbar" style="width: 75%"
                      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${renderPokemonSpAttack}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Sp.Defence</td>
                <td class="infoTable3">
                  <div class="progress">
                    <div id="progressBarSpDefence" class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%"
                      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${renderPokemonSpDefence}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Speed</td>
                <td class="infoTable3">
                  <div class="progress">
                    <div id="progressSpeed" class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%"
                      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${renderPokemonSpeed}</div>
                  </div>
                </td>
              </tr>
             </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  `
  progessBar(renderPokemonHP, renderPokemonAttack, renderPokemonDefence, renderPokemonSpAttack, renderPokemonSpDefence, renderPokemonSpeed);
}


function progessBar(renderPokemonHP, renderPokemonAttack, renderPokemonDefence, renderPokemonSpAttack, renderPokemonSpDefence, renderPokemonSpeed) {
  document.getElementById('progressBarHP').style.width = `${renderPokemonHP}%`;
  document.getElementById('progressBarAttack').style.width = `${renderPokemonAttack}%`;
  document.getElementById('progressBarDefence').style.width = `${renderPokemonDefence}%`;
  document.getElementById('progressBarSpAttack').style.width = `${renderPokemonSpAttack}%`;
  document.getElementById('progressBarSpDefence').style.width = `${renderPokemonSpDefence}%`;
  document.getElementById('progressSpeed').style.width = `${renderPokemonSpeed}%`;
  return
}




