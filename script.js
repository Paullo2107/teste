const noticias = [
  {
    titulo: "Brasil avança em tecnologia sustentável",
    imagem: "https://github.com/Paullo2107/teste/tree/main/imagens/noticia1",
    link: "https://g1.globo.com/brasil/noticia1",
  },
  {
    titulo: "Nova descoberta na medicina impressiona cientistas",
    imagem: "https://github.com/Paullo2107/teste/tree/main/imagens/noticia2",
    link: "https://g1.globo.com/saude/noticia2",
  }
];

const container = document.getElementById('noticias');
noticias.forEach(noticia => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${noticia.imagem}" alt="Imagem da notícia">
    <h2>${noticia.titulo}</h2>
    <a href="${noticia.link}" target="_blank">Ler mais</a>
  `;
  container.appendChild(card);
});

document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Obrigado por assinar nossa newsletter!");
});
