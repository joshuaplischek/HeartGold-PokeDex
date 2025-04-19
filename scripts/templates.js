function renderCardsTemplate(i) {
    return/*html*/`
        <div class="mini-card">
            <div class="id-name-section">
                <div>
                    <p>${pokemonDatas[i].name.value.name}</p>
                </div>
                <div class="id-conatiner">
                    <img src="../assets/img/pokemon-colored.png" alt="">
                    <p>${pokemonDatas[i].id.value}</p>
                </div>
            </div>
            <div class="type-image-section">
                <div class="types-section" id="pokemonTypes${i}"></div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png" alt="">
            </div>
        </div>
    `
}

function renderTypesTemplate(translated){
    return/*html*/`
        <div class="types"><p>${translated}</p></div>
    `
}