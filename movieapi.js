
'use strict'

async function pesquisarFotos(movie) {

  const url = `https://imdb.iamidiotareyoutoo.com/search?q=${movie}`;

  try {
    const response = await fetch(url)

    const data = await response.json()
    const movies = data.description
    const movieImgs = [];

    movies.forEach((filme) => {

      movieImgs.push(filme['#IMG_POSTER'])
    });

    return movieImgs
  } catch (error) {
    return `Erro ao pesquisar fotos: ${error.message}`
  }
}

async function preencherFotos() {
  const filme = document.getElementById('filme').value
  const fotos = await pesquisarFotos(filme)
  const galeriaFotos = document.getElementById('galeria')
  galeriaFotos.replaceChildren('')
  fotos.forEach((url) => criarImg(url, galeriaFotos))
}

function criarImg(url, galeriaFotos) {
  const novaImagem = document.createElement('img')
  novaImagem.src = url
  galeriaFotos.appendChild(novaImagem)
}

document.getElementById('pesquisar').addEventListener('click', preencherFotos)