const personagens = document.querySelectorAll(".personagem");
    
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    //busca o id do personagem que o mouse foi passado em cima
    const idSelecionado = personagem.attributes.id.value;
    //se passado o mouse por cima do ultron não faz nada por que ele já foi selecionado pelo player 2
    if(idSelecionado === 'baraka') return;
    //busca o personagem que já está selecionado
    const personagemSelecionado = document.querySelector('.selecionado');
    //retira a classe do que já está selecionado
    personagemSelecionado.classList.remove('selecionado');
    //para colocar no que está com o mouse em cima
    personagem.classList.add('selecionado');
    //busca a imagem grande atual do jogador 1 
    const imagemPlayer1 = document.getElementById('personagem-player-1');
    //define a nova imagem pelo id que foi passado o mouse em cima
    imagemPlayer1.src = `./src/imagens/${idSelecionado}.gif`;
    //busca a div pai do jogador 1
    const nomePlayer1 = document.getElementById('nome-player-1');
     //busca o nome do personagem que já está selecionado
    const nomeSelecionado = personagem.getAttribute('data-name');
    //pra depois buscar o texto do h2 e trocar pelo nome do que está com o mouse em cima
    nomePlayer1.innerHTML = nomeSelecionado;
    
  });
});

