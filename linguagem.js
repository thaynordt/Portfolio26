// 1. BANCO DE DADOS DAS ATIVIDADES
const dadosAtividades = {
    atividade1: {
        titulo: "Paixão Segundo G.H.",
        grupo: "Thaylla, Marcus, Naiara, Carolina e Vitor",
        descricao: "Na atividade de Psicologia, analisamos se a experiência de G.H. representa um colapso psíquico ou uma expansão de consciência, utilizando conceitos como crise de identidade, dissolução do ego e experiências-limite. Com base em podcasts, discutimos se a vivência é patológica ou transformadora, concluindo que ela apresenta elementos de ambos, combinando ruptura e potencial de crescimento pessoal.",
        competencias: ["H4 e H22"],
        
        // OLHA A MUDANÇA AQUI (agora aponta para a pasta 'atividades' em vez de 'fotos'):
        imagem: "atividades/capa-gh.png", 
        
        link: "https://drive.google.com/file/d/1QF_zTRTz-_-bZ5lVSHkoejWVUH72r57P/view?usp=sharing"
    },
    atividade2: {
        titulo: "Game Literário",
        grupo: "Thaylla, Naiara, Marcus, Vitor e Carolina",
        descricao: "Na atividade, o grupo ficou responsável pelo Romantismo 2ª geração e desenvolveu um jogo da memória no Wordwall, no qual era necessário ligar autores às suas respectivas obras. O conteúdo abordou características como pessimismo, subjetivismo e escapismo, além do contexto do Segundo Reinado e das influências do Byronismo e da tuberculose. A proposta tornou a revisão mais interativa, criativa e colaborativa.",
        competencias: ["H4 e H14"],
        imagem: "atividades/capa-game.png",
        link: "https://wordwall.net/pt/resource/108146184"
    },

     atividade5: {
        titulo: "RED 1000",
        grupo: "Thaylla, Naiara, Marcus, Vitor e Carolina",
        descricao: "Na atividade, realizamos uma redação na plataforma RED1000, seguindo o modelo de dissertação do ENEM. Primeiro, escrevemos o texto à mão e, depois, digitamos a versão final na plataforma. O tema abordado foi “Os perigos do autodiagnóstico de transtornos mentais nas redes sociais no Brasil”, com prazo de duas aulas para realizar todo o processo.",
        competencias: ["H22"],
        imagem: "atividades/red.png",
        link: "https://drive.google.com/file/d/1uSu2oRTAdKqhaF-KOtuByULsyaMM07w6/view"
    },

     atividade4: {
        titulo: "Que tipo de arte você consome?",
        grupo: "Thaylla",
        descricao: "Nesta atividade, produzimos individualmente um texto em inglês sobre nosso artista, filme e música favoritos. Pesquisamos informações sobre cada um e explicamos os motivos das nossas escolhas, praticando o Simple Past e adicionando imagens ao trabalho para incluí-lo no portfólio.",
        competencias: ["H25"],
        imagem: "atividades/capa-ingles.png",
        link: "https://docs.google.com/document/d/1kNQ4IbH3cFcBOnsuJ7lIVFL7MHQSiq-HsE1ZZg5hD-E/edit?usp=sharing"
    },

    atividade3: {
        titulo: "Manifesto Antropófago e Manifesto Pau-Brasil",
        grupo: "Thaylla, Naiara e Carolina",
        descricao: "Nessa atividade, estudamos o gênero manifesto a partir do Manifesto Pau-Brasil e do Manifesto Antropófago, de Oswald de Andrade. Em grupo, criamos um manifesto contemporâneo em formato de vídeo, escolhendo um tema atual e utilizando argumentos, criatividade e frases de impacto. A atividade também envolveu a criação de roteiro, produção e edição do vídeo, buscando provocar reflexão no público.",
        competencias: ["H3 e H24"],
        imagem: "atividades/capa-manifesto.png",
        link: "https://www.youtube.com/watch?v=Z9Gvr4Xk5N8&feature=youtu.be"
    }

};

// 2. LÓGICA DO FILTRO DE TRIMESTRE
const botoesTri = document.querySelectorAll('.btn-tri');
const cards = document.querySelectorAll('.card');

botoesTri.forEach(botao => {
    botao.addEventListener('click', () => {
        // Mudar cor do botão
        botoesTri.forEach(b => b.classList.remove('active'));
        botao.classList.add('active');

        const triSelecionado = botao.getAttribute('data-tri');

        // Filtrar cards
        cards.forEach(card => {
            const cardTri = card.getAttribute('data-trimestre');
            if (triSelecionado === 'todos' || cardTri === triSelecionado) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 3. LÓGICA DA TELA CHEIA (MODAL)
function openDetails(id) {
    const info = dadosAtividades[id];
    
    document.getElementById('modalTitle').innerText = info.titulo;
    document.getElementById('modalGroup').innerText = info.grupo;
    document.getElementById('modalDesc').innerText = info.descricao;
    document.getElementById('modalImage').src = info.imagem;
    document.getElementById('modalLink').href = info.link;

    // Competências
    const lista = document.getElementById('modalComp');
    lista.innerHTML = "";
    info.competencias.forEach(comp => {
        let li = document.createElement('li');
        li.innerText = comp;
        lista.appendChild(li);
    });

    document.getElementById('fullScreenModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
}

function closeDetails() {
    document.getElementById('fullScreenModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Destrava o scroll
}