const listaLivros = document.querySelector('#livros')
const valorTodosLivros = document.querySelector('#valor_total_livros_disponiveis')

function exibirLivros(listaDeLivros) {
    listaLivros.innerHTML = '' 
    valorTodosLivros.innerHTML = ''

    listaDeLivros.forEach(livro => {
        let disponibiliade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        listaLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibiliade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    });
}