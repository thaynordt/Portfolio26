// 1. BANCO DE DADOS DAS ATIVIDADES
const dadosAtividades = {
    atividade1: {
        titulo: "Meme sobre evolucionismo",
        grupo: "Thaylla e Marcus",
        descricao: "Na atividade de Psicologia, analisamos se a experiência de G.H. representa um colapso psíquico ou uma expansão de consciência, utilizando conceitos como crise de identidade, dissolução do ego e experiências-limite. Com base em podcasts, discutimos se a vivência é patológica ou transformadora, concluindo que ela apresenta elementos de ambos, combinando ruptura e potencial de crescimento pessoal.",
        competencias: ["C3 - H15 e H18"],
        
        // OLHA A MUDANÇA AQUI (agora aponta para a pasta 'atividades' em vez de 'fotos'):
        imagem: "atividades/capa-meme.webp", 
        
        link: "https://drive.google.com/file/d/1li8ABMTs8RyOMEs42ZX0mHJN90EO537F/view?usp=sharing"
    },
    atividade2: {
        titulo: "Game Literário",
        grupo: "Thaylla, Naiara, Marcus, Vitor e Carolina",
        descricao: "Na atividade, o grupo ficou responsável pelo Romantismo 2ª geração e desenvolveu um jogo da memória no Wordwall, no qual era necessário ligar autores às suas respectivas obras. O conteúdo abordou características como pessimismo, subjetivismo e escapismo, além do contexto do Segundo Reinado e das influências do Byronismo e da tuberculose. A proposta tornou a revisão mais interativa, criativa e colaborativa.",
        competencias: ["H4 e H14"],
        imagem: "atividades/capa-impactos.png",
        link: "https://drive.google.com/file/d/1MXfGweqEBHOFxJCBv6UMNBEZ8JqzEGY9/view?usp=sharing"
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