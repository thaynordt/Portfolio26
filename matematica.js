// 1. BANCO DE DADOS DAS ATIVIDADES
const dadosAtividades = {
    atividade1: {
        titulo: "Atividade Filme Quebrando a Banca",
        grupo: "Individual",
        descricao: "Nesta atividade, realizamos tarefas baseadas no filme Quebrando a Banca, desenvolvendo reflexões e análises sobre a história apresentada. A avaliação aconteceu por meio da participação durante as atividades, considerando critérios como criatividade, organização e desempenho. A proposta contribuiu para estimular o raciocínio lógico, e a interpretação.",
        competencias: [
            "C5: Aplicar o pensamento probabilístico para quantificar e fazer previsões em situações aplicadas a diferentes áreas do conhecimento e da vida cotidiana.",
            "H30: Identificar dados, regularidades e relações numa situação que envolva o raciocínio combinatório, utilizando os processos de contagem.", 
            "H31: Reconhecer fenômenos e eventos (naturais, científicos, tecnológicos e/ou  sociais) de caráter aleatório, compreendendo o significado e a importância da  probabilidade como meio de prever resultados."
        ],
        
        // OLHA A MUDANÇA AQUI (agora aponta para a pasta 'atividades' em vez de 'fotos'):
        imagem: "atividades/capa-banca.png", 
        
        link: "https://drive.google.com/file/d/1sqtPFPRoqAbkOyzMC03OHHxf1jnbsdSi/view?usp=sharing"
    },
    atividade2: {
        titulo: "AV1 - Jogo Quebrando a Banca",
        grupo: "Thaylla, Naiara, Marcus, Vitor e Carolina",
        descricao: "Nesta atividade em grupo, criamos um jogo original inspirado no filme Quebrando a Banca, utilizando conceitos de análise combinatória e teoria das probabilidades. Desenvolvemos regras claras, estratégias de apostas e elementos baseados em chances matemáticas para tornar o jogo desafiador e divertido.",
        competencias: [
    "C5: Aplicar o pensamento probabilístico para quantificar e fazer previsões em situações aplicadas a diferentes áreas do conhecimento e da vida cotidiana.",
    "H30: Identificar dados, regularidades e relações numa situação que envolva o raciocínio combinatório, utilizando os processos de contagem.",
    "H31: Reconhecer fenômenos e eventos (naturais, científicos, tecnológicos e/ou  sociais) de caráter aleatório, compreendendo o significado e a importância da  probabilidade como meio de prever resultados."
],
        imagem: "atividades/capa-jogobanca.png",
        link: "https://jogo-mtm-probabilidade.netlify.app/"
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

    // --- AJUSTE DAS COMPETÊNCIAS AQUI ---
    const lista = document.getElementById('modalComp');
    lista.innerHTML = "";

    // 1. Pegamos o que está no banco de dados
    let listaFinal = [];

    // 2. Verificamos se é um texto único que precisa ser "quebrado"
    if (info.competencias.length === 1 && info.competencias[0].includes('.,')) {
        // Se tiver o separador ".,", ele quebra em vários itens
        listaFinal = info.competencias[0].split('.,');
    } else {
        // Se já estiver separado (como na sua atividade 2), usa como está
        listaFinal = info.competencias;
    }

    // 3. Cria os tópicos na tela
    listaFinal.forEach(comp => {
        if (comp.trim() !== "") { // Ignora espaços vazios
            let li = document.createElement('li');
            li.innerText = comp.trim();
            lista.appendChild(li);
        }
    });
    // -------------------------------------

    document.getElementById('fullScreenModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}
function closeDetails() {
    document.getElementById('fullScreenModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Destrava o scroll
}

