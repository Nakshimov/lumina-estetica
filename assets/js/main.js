/* ============================================================
   Lumina Estética & Bem-estar — Interações do site
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Número do WhatsApp (alterar em todos os arquivos) ---------- */
  var WHATSAPP_NUMERO = '5561999990000';

  /* ---------- Header e popup do WhatsApp ---------- */
  var header = document.querySelector('.site-header');
  var popupWhatsapp = document.querySelector('.whatsapp-fixo');
  var areaEnvio = document.getElementById('formulario-contato');

  function atualizarPopupWhatsapp() {
    if (!popupWhatsapp || !areaEnvio) return;
    var topoArea = areaEnvio.getBoundingClientRect().top;
    var chegouArea = topoArea < window.innerHeight - 60;

    popupWhatsapp.classList.toggle('oculto', chegouArea);
    popupWhatsapp.setAttribute('aria-hidden', String(chegouArea));
    if (chegouArea) {
      popupWhatsapp.setAttribute('tabindex', '-1');
    } else {
      popupWhatsapp.removeAttribute('tabindex');
    }
  }

  function atualizarHeader() {
    if (header) header.classList.toggle('rolado', window.scrollY > 12);
    atualizarPopupWhatsapp();
  }
  window.addEventListener('scroll', atualizarHeader, { passive: true });
  window.addEventListener('resize', atualizarHeader);
  atualizarHeader();

  /* ---------- Menu mobile ---------- */
  var botaoMenu = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-principal');
  if (botaoMenu && nav) {
    botaoMenu.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      botaoMenu.classList.toggle('aberto', aberto);
      botaoMenu.setAttribute('aria-expanded', String(aberto));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('aberto');
        botaoMenu.classList.remove('aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Accordion da FAQ ---------- */
  document.querySelectorAll('.faq-pergunta').forEach(function (pergunta) {
    pergunta.addEventListener('click', function () {
      var item = pergunta.closest('.faq-item');
      var jaAberto = item.classList.contains('aberto');
      document.querySelectorAll('.faq-item.aberto').forEach(function (aberto) {
        aberto.classList.remove('aberto');
        aberto.querySelector('.faq-pergunta').setAttribute('aria-expanded', 'false');
      });
      if (!jaAberto) {
        item.classList.add('aberto');
        pergunta.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Formulário de contato → WhatsApp ---------- */
  var formulario = document.getElementById('formulario-contato');
  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
      var nome = formulario.querySelector('#nome')?.value.trim() || '';
      var servico = formulario.querySelector('#servico')?.value || 'Não informado';
      var mensagem = formulario.querySelector('#mensagem')?.value.trim() || '';

      var texto = 'Olá! Sou *' + nome + '* e gostaria de informações sobre *' + servico +
        '*.%0A%0A' + (mensagem ? mensagem + '%0A%0A' : '') +
        'Vi seu contato no site e aguardo seu retorno. Obrigada!';

      window.open('https://wa.me/' + WHATSAPP_NUMERO + '?text=' + texto, '_blank', 'noopener');
    });
  }

  /* ---------- Ano atual no rodapé ---------- */
  var ano = document.getElementById('ano-atual');
  if (ano) ano.textContent = new Date().getFullYear();
})();
