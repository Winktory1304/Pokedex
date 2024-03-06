function renderDetailView(i) {
    // Daten aus dem Bild wieder holen
    let detailLoadedPokemon = allPokemon[i - 1];
    let renderTypesAmount = detailLoadedPokemon['types'];
    let renderPokemonType1 = detailLoadedPokemon['types']['0']['type']['name'];
    let renderPokemonType2 = '';
    if (renderTypesAmount.length > 1) {
        renderPokemonType2 = detailLoadedPokemon['types']['1']['type']['name'];
    }
    document.getElementById('detailViewContent').innerHTML = '';
    document.getElementById('detailViewContent').innerHTML +=
        /*html*/ `
    <div id="detailView${i}" class="detail-view">
        <nav class="NavDetailCard">
            <button type="button" onclick="backToPage(${i})" class="btn btn-outline-light btn-sm mx-2 "><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-arrow-left-short navBackArrow" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
            </svg><strong>BACK</strong></button>
            <img class="imgPokedex" src="img/pokedex.png" alt="">

        </nav>
        <div class="detail-view-child">
            <h1 class="dcName">${detailLoadedPokemon['name']}</h1>
            <div class="mainInfoCaontainer">
                <div class="childInfocontainer1">
                    <table class="InfoTable1">
                        <thead>
                        <tbody>
                            <tr>
                                <td class ="bold">ID</td>
                                <td>${i}</td>
                            </tr>
                            <tr>
                                <td class ="bold">Height</td>
                                <td>${detailLoadedPokemon['height']}m</td>
                            </tr>
                            <tr>
                                <td class ="bold">Weight</td>
                                <td>${detailLoadedPokemon['weight']}kg</td>
                            </tr>
                            <tr>
                                <td class ="bold">Typ</td>
                                <td>${renderPokemonType1} ${renderPokemonType2}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img class="childInfocontainer2" src="${detailLoadedPokemon['sprites']['other']['dream_world']['front_default']}" alt="">
                <div class="childInfocontainer3">
                    <table class="InfoTable1">
                        <tbody>
                            <tr>
                                <td>HP</td>
                                <td class="infoTable3">
                                    <div class="progress witdh-100px">
                                        <div id="progressBarHP" class="progress-bar text-black progress-bar-striped bg-warning fs-5" role="progressbar"
                                            style="width: ${detailLoadedPokemon['stats']['0']['base_stat']}%"
                                            aria-valuenow="${detailLoadedPokemon['stats']['0']['base_stat']}" aria-valuemin="0" aria-valuemax="100">${detailLoadedPokemon['stats']['0']['base_stat']}</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td class="infoTable3">
                                    <div class="progress">
                                        <div id="progressBarAttack" class="progress-bar text-black progress-bar-striped bg-warning fs-5" role="progressbar"
                                            style="width: ${detailLoadedPokemon['stats']['1']['base_stat']}%"
                                            aria-valuenow="${detailLoadedPokemon['stats']['1']['base_stat']}" aria-valuemin="0" aria-valuemax="100">${detailLoadedPokemon['stats']['1']['base_stat']}</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Defence</td>
                                <td class="infoTable3">
                                    <div class="progress">
                                        <div id="progressBarDefence" class="progress-bar text-black progress-bar-striped bg-warning fs-5" role="progressbar"
                                            style="width: ${detailLoadedPokemon['stats']['2']['base_stat']}%"
                                            aria-valuenow="${detailLoadedPokemon['stats']['2']['base_stat']}" aria-valuemin="0" aria-valuemax="100">${detailLoadedPokemon['stats']['2']['base_stat']}</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sp.Attack</td>
                                <td class="infoTable3">
                                    <div class="progress">
                                        <div id="progressBarSpAttack" class="progress-bar text-black progress-bar-striped bg-warning fs-5 " role="progressbar"
                                            style="width: ${detailLoadedPokemon['stats']['3']['base_stat']}%"
                                            aria-valuenow="${detailLoadedPokemon['stats']['3']['base_stat']}" aria-valuemin="0" aria-valuemax="100">${detailLoadedPokemon['stats']['3']['base_stat']}</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sp.Defence</td>
                                <td class="infoTable3">
                                    <div class="progress">
                                        <div id="progressBarSpDefence" class="progress-bar text-black progress-bar-striped bg-warning fs-5" role="progressbar"
                                            style="width: ${detailLoadedPokemon['stats']['4']['base_stat']}%"
                                            aria-valuenow="${detailLoadedPokemon['stats']['4']['base_stat']}" aria-valuemin="0" aria-valuemax="100">${detailLoadedPokemon['stats']['4']['base_stat']}</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td class="infoTable3">
                                    <div class="progress">
                                        <div id="progressBarSpeed" class="progress-bar text-black progress-bar-striped bg-warning fs-5 " role="progressbar"
                                            style="width: ${detailLoadedPokemon['stats']['5']['base_stat']}%"
                                            aria-valuenow="${detailLoadedPokemon['stats']['5']['base_stat']}" aria-valuemin="0" aria-valuemax="100">${detailLoadedPokemon['stats']['5']['base_stat']}</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `;
    progressBar(detailLoadedPokemon['stats']['0']['base_stat'], detailLoadedPokemon['stats']['1']['base_stat'], detailLoadedPokemon['stats']['2']['base_stat'], detailLoadedPokemon['stats']['3']['base_stat'], detailLoadedPokemon['stats']['4']['base_stat'], detailLoadedPokemon['stats']['5']['base_stat']);
}

function progressBar(renderPokemonHP, renderPokemonAttack, renderPokemonDefence, renderPokemonSpAttack, renderPokemonSpDefence, renderPokemonSpeed) {
    document.getElementById('progressBarHP').style.width = `${renderPokemonHP}%`;
    document.getElementById('progressBarAttack').style.width = `${renderPokemonAttack}%`;
    document.getElementById('progressBarDefence').style.width = `${renderPokemonDefence}%`;
    document.getElementById('progressBarSpAttack').style.width = `${renderPokemonSpAttack}%`;
    document.getElementById('progressBarSpDefence').style.width = `${renderPokemonSpDefence}%`;
    document.getElementById('progressBarSpeed').style.width = `${renderPokemonSpeed}%`;
}
