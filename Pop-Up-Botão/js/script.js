document.addEventListener('DOMContentLoaded', function() {
    let botao = document.querySelector('#Button');
    let modal = document.querySelector('.modal'); // Seleciona o elemento com a classe 'modal'
    let modalVisivel = true;
  
    botao.addEventListener('click', function() {
      if (modalVisivel == true) {
        modal.style.display = 'block'; // Exibe a modal
        modalVisivel = false;
      } else {
        modal.style.display = 'none'; // Oculta a modal
        modalVisivel = true;
      }
  
      var iconeFechar = document.querySelector('[data-bs-dismiss="modal"]'); // Seleciona o botão de fechamento do ícone
      var botaoFechar = document.querySelector('.modal-footer button.btn-secondary'); // Seleciona o botão de fechamento na modal
  
      iconeFechar.addEventListener('click', function() {
        modal.style.display = 'none'; // Oculta a modal quando o botão de fechamento do ícone é clicado
      });
  
      botaoFechar.addEventListener('click', function() {
        modal.style.display = 'none'; // Oculta a modal quando o botão "Fechar" é clicado
      });
    });
  });