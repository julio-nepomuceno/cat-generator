async function gerarImagem() {
    const url = "https://api.thecatapi.com/v1/images/search"
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()
        const imagemGato = data[0].url
        document.querySelector(".imagem-gato").src = imagemGato
    }
}