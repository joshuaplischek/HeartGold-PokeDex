let pokemonDatas = [];

async function init() {
    await fetchPokeApi();
    renderPokeDexCards();
}

async function fetchPokeApi() {
    let link = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')).json();
    let results = link.results;
    let promises = results.map(result => fetchSinglePokemons(result.url));
    await Promise.all(promises);
}

async function getSinglePokemonData(results) {
    for (let i = 0; i < results.length; i++) {
        const element = results[i].url;
        fetchSinglePokemons(element);
    }
}
async function fetchSinglePokemons(url){
    let fetchPokemons = await (await fetch(url)).json();
    let germanNameUrl = fetchPokemons.species.url;
    let germanPokemonName = await (await fetch(germanNameUrl)).json();
    getGermanPokemonName(germanPokemonName, fetchPokemons);
}

async function getGermanPokemonName(germanPokemonName, fetchPokemons) {
    let name = {name: "Name", value: germanPokemonName.names[5]};
    getPokemonId(fetchPokemons, name);
}

function getPokemonId(pokemon , name) {
    let id = {name_id: "Id", value: pokemon.id};
    getPokemonTypes(pokemon ,id, name);
}

function getPokemonTypes(pokemon, id, name) {
    let types = pokemon.types;
    let dataArray = {id, name, types};
    pokemonDatas.push(dataArray);
}

function renderPokeDexCards() {
    let contetRef = document.getElementById(`content`)
    for (let indexPokemon = 0; indexPokemon < pokemonDatas.length; indexPokemon++) {
        const element = pokemonDatas[indexPokemon].types;
        contetRef.innerHTML += renderCardsTemplate(indexPokemon);
        let typeRef = document.getElementById(`pokemonTypes${indexPokemon}`);
        for (let indexType = 0; indexType < element.length; indexType++) {
            const typeElement = element[indexType].type.name;
            let translated = translateType(typeElement);
            typeRef.innerHTML += renderTypesTemplate(translated);
        }
    }
}

function translateType(type) {
    return pokemonTypeTranslater[type] || type;
}