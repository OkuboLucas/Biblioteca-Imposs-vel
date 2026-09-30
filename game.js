// ========================================
// TELAS
// ========================================

const telaMenu = document.querySelector("#tela-menu");
const telaComoJogar = document.querySelector("#tela-como-jogar");
const telaPreparacao = document.querySelector("#tela-preparacao");
const telaJogo = document.querySelector("#tela-jogo");


// ========================================
// BOTÕES
// ========================================

const btnJogar = document.querySelector("#btn-jogar");
const btnComoJogar = document.querySelector("#btn-como-jogar");
const btnVoltar = document.querySelector("#btn-voltar");
const btnComecar = document.querySelector("#btn-comecar");


// ========================================
// TROCAR DE TELA
// ========================================

function mostrarTela(tela) {

    // Esconde todas as telas
    document.querySelectorAll(".tela").forEach(function (tela) {

        tela.classList.add("tela-escondida");

    });


    // Mostra somente a tela escolhida
    tela.classList.remove("tela-escondida");
}


// ========================================
// BOTÃO JOGAR
// ========================================

btnJogar.addEventListener("click", function () {

    mostrarTela(telaPreparacao);

});


// ========================================
// BOTÃO COMO JOGAR
// ========================================

btnComoJogar.addEventListener("click", function () {

    mostrarTela(telaComoJogar);

});


// ========================================
// BOTÃO VOLTAR
// ========================================

btnVoltar.addEventListener("click", function () {

    mostrarTela(telaMenu);

});


// ========================================
// BOTÃO COMEÇAR
// ========================================

btnComecar.addEventListener("click", function () {

    mostrarTela(telaJogo);

    carregarLivros();

});


// ========================================
// CARREGAR OS LIVROS
// ========================================

function carregarLivros() {

    const cards = document.querySelectorAll(".livro");

    // Pega a primeira rodada
    const rodada = perguntas[0];


    // Verifica se a rodada existe
    if (!rodada) {

        console.error("Nenhuma rodada foi encontrada em perguntas.js");

        return;
    }


    // Coloca cada livro em seu respectivo card
    cards.forEach(function (card, indice) {

        const livro = rodada.livros[indice];


        // Verifica se existe um livro nessa posição
        if (!livro) {

            console.error(
                `Não existe um livro na posição ${indice}.`
            );

            return;
        }


        // ========================================
        // TÍTULO
        // ========================================

        card.querySelector(".livro-titulo").textContent =
            livro.titulo;


        // ========================================
        // AUTOR
        // ========================================

        card.querySelector(".livro-autor").textContent =
            livro.autor;


        // ========================================
        // ANO
        // ========================================

        card.querySelector(".livro-ano").textContent =
            livro.ano;


        // ========================================
        // SINOPSE
        // ========================================

        card.querySelector(".livro-sinopse").textContent =
            livro.sinopse;


        // ========================================
        // CAPA
        // ========================================

        const imagem = card.querySelector(".capa img");


        imagem.src = livro.capa;

        imagem.alt = `Capa de ${livro.titulo}`;

    });

}

