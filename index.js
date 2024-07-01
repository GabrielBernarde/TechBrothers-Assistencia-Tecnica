document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
  
    const assistenciaModal = document.getElementById('assistencia-modal');
    const solicitarBtn = document.getElementById('solicitar-assistencia-btn');
    const closeBtns = document.querySelectorAll('.modal .close');
    const encaminharBtn = document.getElementById('encaminhar-pedido-btn');
  
  
    solicitarBtn.addEventListener('click', function () {
      assistenciaModal.style.display = 'block';
    });
  
  
    closeBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        assistenciaModal.style.display = 'none';
      });
    });
  
    window.addEventListener('click', function (e) {
      if (e.target === assistenciaModal) {
        assistenciaModal.style.display = 'none';
      }
    });
  
  
    encaminharBtn.addEventListener('click', function () {
      const form = document.getElementById('assistencia-form');
      const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
      const servicosSelecionados = Array.from(checkboxes).map(input => input.value);
  
      const mensagem = 'Oi, gostaria de assistência técnica e preciso de: ' + servicosSelecionados.join(', ');
      const mensagemEncoded = encodeURIComponent(mensagem);
      const whatsappURL = 'https://api.whatsapp.com/send?phone=SEUNUMERO&text=' + mensagemEncoded;
  
      window.location.href = whatsappURL;
    });
  });