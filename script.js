async function getPokemons() {
    try{
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const dados = await resposta.json();

        const pokedex = document.querySelector('.pokedex');

        dados.results.forEach((pokemon) => {
            const li = document.createElement('li');
            li.innerText = pokemon.name;
            pokedex.appendChild(li);
        });
    }catch(error){
        console.error('Erro ao bsucar o pokemon: ', error);
    }
};

getPokemons();

