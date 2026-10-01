function mudarFoto(caminhoImagem, corFundo) {
    document.getElementById('fotoExibida').src = caminhoImagem;
    
    document.body.style.backgroundColor = corFundo;
}