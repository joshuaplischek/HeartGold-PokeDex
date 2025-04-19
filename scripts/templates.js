function renderCardsTemplate(i) {
    return/*html*/`
        <div class="mini-card" id="miniPokeCard${i}">
            <div class="id-name-section">
                <div class="pokemon-name">
                    <p>${pokemonDatas[i].name.value.name}</p>
                </div>
                <div class="id-conatiner">
                    <img src="../assets/img/pokemon-colored.png" alt="">
                    <p>${pokemonDatas[i].id.value}</p>
                </div>
            </div>
            <div class="type-image-section">
                <div class="types-section" id="pokemonTypes${i}"></div>
                <div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png" alt="">
                </div>
            </div>
        </div>
    `
}

function renderTypesTemplate(translated, i, indexType){
    return/*html*/`
        <div id="typeContainer${i}-${indexType}" class="types" ><p>${translated}</p></div>
    `
}