const carrosselProjetos = (caminho, titulo, link, width) => {
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
  },
  {
    titulo: 'TrocaCor',
    caminho: 'assets/imagens/TrocaCor.png',
    link: 'https://github.com/THAYNAALVES10/TrocaCor'
  },
  {
    titulo: 'Portifólio',
    caminho: 'assets/imagens/portiforio.png',
    link: 'https://github.com/THAYNAALVES10/portifolio'
  },
  {
    titulo: 'Noticias',
    caminho: 'assets/imagens/Noticias.png',
    link: 'https://www.figma.com/file/Ic2MsQ5nU0MPsc9xmWhngr/Untitled?type=design&mode=design&t=raHvp9ZqWROdv35k-0'
  },

  {
    titulo: 'Mário javascript',
    caminho: 'assets/imagens/mario.png',
    link: 'https://thaynaalves10.github.io/game-mario/',
    width: 50
  },
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

window.addEventListener('scroll', function() {
  var header = document.querySelector('nav');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 50) { // Define a posição na qual você deseja mudar a cor do cabeçalho
    header.style.backgroundColor = '#000'; // Altere a cor conforme necessário
  } else {
    header.style.backgroundColor = '#6E07F3'; // Cor padrão quando o usuário rolar para o topo
  }
});
