// Função simples que aparece quando o usuário clica em um serviço
function alertServico(servico) {
  alert("Você clicou em: " + servico);
}

// Anima elementos ao aparecer no scroll
const elements = document.querySelectorAll('.scroll-anim');

function checkScroll() {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // executa na carga