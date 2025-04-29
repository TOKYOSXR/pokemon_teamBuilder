async function getPokemons() {
    try {
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0');
        const dados = await resposta.json();

        const pokedex = document.querySelector('.pokedex');
        for (let pokemon of dados.results) {

            const respostaPokemon = await fetch(pokemon.url);
            const dadosPokemon = await respostaPokemon.json();


            const img = document.createElement('img');
            img.src = dadosPokemon.sprites.front_default;
            img.alt = pokemon.name;

            const li = document.createElement('li');
            li.appendChild(img);
            li.dataset.pokemonName = pokemon.name; 


            pokedex.appendChild(li);
            const timePokemon = document.querySelector('.time-pokemon');
            // Evento de clique no Pokémon para mostrar detalhes
            li.addEventListener('click', function (event) {
                 
                

                
                imagemPoke.src = dadosPokemon.sprites.front_default;
                imagemPoke.alt = pokemon.name;

                // Atualiza o nome do Pokémon
                const nomePoke = document.querySelector(".nome-pokemon");
                nomePoke.textContent = pokemon.name;

                li.remove();
                
            });

            t.addEventListener('click', function(event){

                imagemPoke.src = 'assents/imagens/quem é esse pokemon.png'
                imagemPoke.alt = 'Imagem do pokemon';
                nomePoke.textContent = "???"

                pokedex.appendChild(li)
            })

        }
    } catch (error) {
        console.error('Erro ao buscar o Pokémon:', error);
    }
}

getPokemons();
