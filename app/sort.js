let btnOrdenarPreco = document.querySelector('#btnOrdenarPorPreco')
btnOrdenarPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}