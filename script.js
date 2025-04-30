async function getPokemons() {
    try {
        const nome = document.querySelector('.input-pokemon').value.toLowerCase().trim();
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        const dados = await resposta.json();

        const pokemonPesquisado = document.querySelector('.pokemon_pesquisado');

        // Obtém todos os tipos e gera os ícones correspondentes
        const tipos = dados.types.map(t => t.type.name); // Exemplo: ['fire', 'flying']
        const tiposHTML = tipos.map(tipo => {
            const caminhoIcone = `./assents/imagens/icons/${tipo}.svg`;
            return `
                <div class="iconTipo">
                    <img class="${tipo}" src="${caminhoIcone}" alt="${tipo}">
                </div>
            `;
        }).join(''); // Concatena todos os tipos e ícones

        pokemonPesquisado.innerHTML = `
            <div class="card_pokemon">
                <img class="pokemonImg" src="${dados.sprites.front_default}" alt="Imagem do pokemon">
                <h2>${dados.name}</h2>
                <div class="tipos">${tiposHTML}</div> <!-- Aqui é onde todos os tipos são mostrados -->
                <button class="btn-adicionar">Adicionar ao time</button>
            </div>
        `;
    } catch (error) {
        console.error('Erro ao buscar o Pokémon:', error);
        const pokemonPesquisado = document.querySelector('.pokemon_pesquisado');
        pokemonPesquisado.innerHTML = '<p clsass="erro">Pokemon nao encontrado, tente Novamente ou digite um pokemon valido</p>';
    }
}

// Eventos
document.querySelector('.btn-pesquisar').addEventListener('click', getPokemons);
document.querySelector('.input-pokemon').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        getPokemons();
    }
});
