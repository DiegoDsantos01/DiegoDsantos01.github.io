// Variavel para troca de texto da header
var typed = new Typed(".auto-typed", {
  strings: ["Desenvolvedor", "Ilustrador", "Artista 3D"],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true
})


const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const modal = document.querySelector(".modal");

const images = [
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
  "img/projetos/sonic_copo.jpg",
  "img/projetos/sonic_31.jpg",
  "img/projetos/peridot.jpg",
  "img/projetos/jadeGhost.jpg",
  "img/projetos/eevee_suco.jpg",
  "img/projetos/senseis.jpg",
  "img/projetos/Puff.png",
  "img/projetos/Vi.jpg",
  "img/projetos/Zhongli.png",
  "img/projetos/squirtle_niver.jpg",
  "img/projetos/squirtle.png",
  "img/projetos/klee_frente.jpg",
  "img/projetos/zhong.png",
  "img/projetos/manopla_vi_c.jpg",
  "img/projetos/manopla_vi_f.jpg",
];

// Adiciona as imagens ao carrossel
images.forEach((imageUrl) => {
  const carouselItem = document.createElement("img");
  carouselItem.classList.add("carousel-item");
  carouselItem.setAttribute("src", imageUrl);
  carouselInner.appendChild(carouselItem);
});

// Clona as imagens para criar uma rotação infinita
const carouselItems = carouselInner.querySelectorAll(".carousel-item");
carouselItems.forEach((item) => {
  const clone = item.cloneNode(true);
  carouselInner.appendChild(clone);
});


// Move as imagens para a esquerda para criar o efeito de rotação
let position = 0;
const moveCarousel = () => {
  position--;
  carouselInner.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(moveCarousel);
};
requestAnimationFrame(moveCarousel);

// Abre o lightbox quando uma imagem é clicada
carouselInner.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("carousel-item")) {
    const imageUrl = target.getAttribute("src");
    const modalContent = `
      <img src="${imageUrl}" alt="">
      <span class="close">&times;</span>
    `;
    modal.innerHTML = modalContent;
    modal.style.display = "block";
  }
});

// Fecha o lightbox quando o usuário clica no botão de fechar ou fora da imagem
modal.addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    modal.style.display = "none";
  }
});
