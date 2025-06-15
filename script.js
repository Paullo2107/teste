const noticias = [
  {
    titulo: "Brasil avança em tecnologia sustentável",
    imagem: "https://github.com/Paullo2107/teste/tree/main/imagens/noticia1",
    link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjsr7qykfSNAxVLr5UCHSdTGL8QFnoECD0QAQ&url=https%3A%2F%2Fagenciagov.ebc.com.br%2Fnoticias%2F202505%2Fbrics-aprova-declaracao-e-avanca-em-agenda-industrial-sustentavel-com-foco-em-tecnologia-e-pequenas-empresas&usg=AOvVaw0AKOpVsNu5mIpleCEfFCO3&opi=89978449",
  },
  {
    titulo: "Nova descoberta na medicina impressiona cientistas",
    imagem: "https://github.com/Paullo2107/teste/tree/main/imagens/noticia2",
    link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj138mekfSNAxUaR7gEHfLCBJwQFnoECB4QAQ&url=https%3A%2F%2Foglobo.globo.com%2Fsaude%2Fnoticia%2F2024%2F08%2F15%2Fcientistas-descobrem-que-humanos-envelhecem-drasticamente-em-dois-periodos-aos-44-anos-e-depois-dos-60-entenda.ghtml&usg=AOvVaw2Hvw1rv5ZIzx5pnk6CVx2R&opi=89978449",
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
