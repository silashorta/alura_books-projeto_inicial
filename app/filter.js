const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? ordenarPorQuantidade() : ordenarPorCategoria(categoria)
    
    exibirLivros(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirBannerValorTotal(valorTotal)
    }
}

function ordenarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function ordenarPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirBannerValorTotal(valorTotal) {
    valorTodosLivros.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}
