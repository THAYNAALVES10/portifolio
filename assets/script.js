const carrosselProjetos = (caminho, titulo, link) => {
  const carrossel = document.querySelector('.carrossel');
  const newDiv = document.createElement('div');
  newDiv.classList.add('carrossel-item')
  newDiv.innerHTML = `
<a href="${link}" target="blank">
  <img src="${caminho}">
  <span>${titulo}</span>
</a>
  `
  carrossel.appendChild(newDiv);

}

const projetosList = [

  {
    titulo: 'Netflix Cover',
    caminho: 'assets/imagens/image 4.png',
    link: 'https://github.com/THAYNAALVES10/netflix-cover'
  },
  {
    titulo: 'MovelCraft',
    caminho: 'assets/imagens/movel.png',
    link: 'https://github.com/THAYNAALVES10/MovelCraft'
  },{
    titulo: 'TrocaCor',
    caminho: 'assets/imagens/TrocaCor.png',
    link: 'https://github.com/THAYNAALVES10/TrocaCor'
  }
]

const avancarScroll = (direcao) => {
  const carrocelContent = document.querySelector(".carrossel");

  if (direcao == 'left') {
    carrocelContent.scrollLeft -= 100;
    // carrocelContent.scrollLeft = carrocelContent.scrollLeft - 100;
  } else if (direcao == 'right') {
    carrocelContent.scrollLeft += 100;
    // carrocelContent.scrollRight = carrocelContent.scrollRight - 100;
  }
}

projetosList.forEach(projeto => carrosselProjetos(projeto.caminho, projeto.titulo, projeto.link))