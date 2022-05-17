const personagens = document.querySelectorAll(".personagem");
    
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    const idSelecionado = personagem.attributes.id.value;
    if(idSelecionado === 'baraka') return; 
      
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');
      
    const imagemPlayer1 = document.getElementById('personagem-player-1');
    imagemPlayer1.src = `./src/imagens/${idSelecionado}.gif`;
    
    const nomePlayer1 = document.getElementById('nome-player-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    
    nomePlayer1.innerHTML = nomeSelecionado; 
  });
});

