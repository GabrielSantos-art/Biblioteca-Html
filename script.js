const abrirModais = document.querySelectorAll("[data-modal]");
const fecharModais = document.querySelectorAll('.fecharModal');
const modalIdentificator = document.getElementsByClassName('modal');

abrirModais.forEach(botao => {
  botao.addEventListener('click', () => {
    const modalId = botao.getAttribute('data-modal'); // Pega o ID (ex: "modal1")
    const modal = document.getElementById(modalId);    // Encontra o modal correto
    if (modal) modal.showModal();                     // Abre o modal
  });
});


fecharModais.forEach(botao => {
  botao.addEventListener('click', () => {
    const modal = botao.closest('dialog'); 
    if (modal) modal.close();                    
  });
});


fecharModal.addEventListener('click', () => {
    modalIdentificator.close();
});