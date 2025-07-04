document.addEventListener('DOMContentLoaded', function() { 

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') === '#top' ? 'body' : this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    
    const inicioHeaderBtn = document.getElementById('inicio-header-btn');
    if (inicioHeaderBtn) {
        inicioHeaderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


  const assistenciaModal = document.getElementById('assistencia-modal');
  const solicitarBtn = document.getElementById('solicitar-assistencia-btn');
  const closeBtns = document.querySelectorAll('.modal .close');
  const encaminharBtn = document.getElementById('encaminhar-pedido-btn');

  const conhecaNosModal = document.getElementById('conheca-nos-modal');
  const conhecaNosBtn = document.getElementById('conheca-nos-btn');

  solicitarBtn.addEventListener('click', function () {
    assistenciaModal.style.display = 'block';
  });

  conhecaNosBtn.addEventListener('click', function (e) {
    e.preventDefault();
    conhecaNosModal.style.display = 'block';
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      assistenciaModal.style.display = 'none';
      conhecaNosModal.style.display = 'none';
    });
  });

  window.addEventListener('click', function (e) {
    if (e.target === assistenciaModal) {
      assistenciaModal.style.display = 'none';
    }
    if (e.target === conhecaNosModal) {
      conhecaNosModal.style.display = 'none';
    }
  });

  encaminharBtn.addEventListener('click', function () {
    const form = document.getElementById('assistencia-form');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    const servicosSelecionados = Array.from(checkboxes).map(input => input.value);

    const mensagem = 'Oi, gostaria de assistência técnica e preciso de: ' + servicosSelecionados.join(', ');
    const mensagemEncoded = encodeURIComponent(mensagem);
    const whatsappURL = 'https://api.whatsapp.com/send?phone=5534993396935&text=' + mensagemEncoded;

    window.location.href = whatsappURL;
  });


  
  const socialMediaLinks = {
    github: 'https://github.com/GabrielBernarde?tab=repositories', 
    linkedin: 'https://www.linkedin.com/in/gabriel-bernardes-197008272/', 
    whatsapp: 'https://api.whatsapp.com/send?phone=5534993396935&text=Olá!' 
  };

  
  function setupSocialIcons() {
    const githubIcon = document.getElementById('github-icon');
    const linkedinIcon = document.getElementById('linkedin-icon');
    const whatsappIcon = document.getElementById('whatsapp-icon');

    if (githubIcon) {
      githubIcon.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(socialMediaLinks.github, '_blank');
      });
    }

    if (linkedinIcon) {
      linkedinIcon.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(socialMediaLinks.linkedin, '_blank');
      });
    }

    if (whatsappIcon) {
      whatsappIcon.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(socialMediaLinks.whatsapp, '_blank');
      });
    }
  }

  
  setupSocialIcons();

}); 


