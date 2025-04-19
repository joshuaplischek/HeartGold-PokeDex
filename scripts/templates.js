function renderCardsTemplate(i) {
    return/*html*/`
        <div class="mini-card">
            <div>
                <img src="../assets/img/" alt="">
                <p>${pokemonDatas[i].id.value}</p>
            </div>
            <div>
                <p>${pokemonDatas[i].name.value.name}</p>
            </div>
            <div>
                <img src="" alt="">
            </div>
            <div id="pokemonTypes${i}"></div>
        </div>
    `
}

function renderTypesTemplate(translated){
    return/*html*/`
        <div><p>${translated}</p></div>
    `
}