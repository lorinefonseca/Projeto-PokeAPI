/* const fetchPokemon = () => {
    const getPokemonURL = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = [];

    for (let i = 1; i <= 151; i++){
        pokemonPromises.push(fetch(getPokemonURL(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {

            const infosPokemons = pokemons.reduce((accumulator, pokemon) => {
                accumulator += `

                <div class="card-pokemon">
                <div class="image-pokemon">
                    <img class="artwork-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
                </div>

                <div class="stats">
                    <span class="id-and-name">
                        <p class="id-pokemon"> ${pokemon.id} </p>
                        <p class="name-pokemon"> ${pokemon.name} </p>
                    </span>

                    <span class="type-row">
                        <p class="type-pokemon grass"> ${pokemon.types[0]} </p>
                        <p class="type-pokemon poison"> ${pokemon.types[1]} </p>
                    </span>

                    <div class="specie">
                    <span class="specie-title"> Espécie: </span>
                    <span class="specie-pokemon"> ${pokemon.species.name} </span>
                    </div>
                </div>
            </div>


                `
            }, '')

        const div = document.querySelector('[data-js="pokedex"]')

        //console.log(div)

        div.innerHTML = infosPokemons;

        })

        

}

fetchPokemon()

*/

const fetchPokemon = () => {
    const getPokemonURL = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = 1; i <= 151; i++) {
        pokemonPromises.push(fetch(getPokemonURL(i)).then(response => response.json()));
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {
            const infosPokemons = pokemons.reduce((accumulator, pokemon) => {
                const types = pokemon.types.map(type => `<p class="type-pokemon ${type.type.name}">${type.type.name}</p>`).join('');

                accumulator += `
                    <div class="card-pokemon">
                        <div class="image-pokemon">
                            <img class="artwork-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
                        </div>

                        <div class="stats">
                            <span class="id-and-name">
                                <p class="id-pokemon"> #${pokemon.id.toString().padStart(3, '0')} </p>
                                <p class="name-pokemon"> ${pokemon.name} </p>
                            </span>

                            <div class="type-row">
                                ${types}
                            </div>

                            <div class="specie">
                                <span class="specie-title"> Espécie: </span>
                                <span class="specie-pokemon"> ${pokemon.species.name} </span>
                            </div>
                        </div>
                    </div>
                `;
                return accumulator;
            }, '');

            const div = document.querySelector('[data-js="pokedex"]');
            div.innerHTML = infosPokemons;
        });
}

fetchPokemon();

