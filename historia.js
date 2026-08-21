// 1. BANCO DE DADOS DAS ATIVIDADES
const dadosAtividades = {
    atividade1: {
        titulo: "A Grande Guerra - Reino Unido",
        grupo: "Thaylla, Marcus Vinicius e João Pedro",
        descricao: "A atividade consistia em refletir sobre os meios de comunicação no início do século XX e criar a capa de um jornal da época. O grupo escolheu a Batalha de Somme (01 de julho de 1916), o dia mais mortal do exército britânico.",
        competencias: ["C3 - H15, H16, H20 - C6 - H39"],
        
        // OLHA A MUDANÇA AQUI (agora aponta para a pasta 'atividades' em vez de 'fotos'):
        imagem: "atividades/capa-guerra.png", 
        
        link: "atividades/A Grande Guerra - humanas - 1tri.pdf"
    },
    atividade2: {
        titulo: "Geopolítica",
        grupo: "Thaylla, Naiara, Marcus, Vitor e Carolina",
        descricao: "Em grupos, criamos uma apresentação sobre países de livre escolha, seguindo o modelo em anexo. O trabalho foi desenvolvido com base em dados confiáveis e atualizados, incluindo informações relevantes e características gerais. Nós escolhemos Japão e Nova Zelândia.",
        competencias: ["C1, H1, H2, H3, H4, H5 "],
        imagem: "atividades/capa-geopolitica.png",
        link: "https://drive.google.com/file/d/1M2szM_ya34juNF-9nh_4ULu7kj8OA9aB/view?usp=sharing"
    },

    atividade3: {
        titulo: "Imperialismo no séc. XIX ",
        grupo: "Thaylla, Naiara e Carolina",
        descricao: "Nós escolhemos o Vietnã e apresentamos a sua trajetória histórica por meio de imagens, abordando a colonização, as mudanças na população, a independência e a situação atual.",
        competencias: ["C2 - H8, H10, H12"],
        imagem: "atividades/capa-imperialismo.png",
        link: "https://drive.google.com/file/d/15o_swbtFP1ozy8yIRKzRkaeeoc07c9Fi/view?usp=sharing"
    },

    atividade4: {
        titulo: "Dossiê Histórico com Análise de Fonte Primária ",
        grupo: "Thaylla, Naiara e Carolina",
        descricao: "Nesta atividade, realizamos um dossiê histórico sobre a Queda da França e a Resistência Britânica durante a Segunda Guerra Mundial. Pesquisamos o contexto dos acontecimentos, seus principais impactos e analisamos uma fonte primária relacionada ao tema, buscando compreender diferentes perspectivas sobre o período.",
        competencias: ["Não foi informado as competencias e habilidades."],
        imagem: "atividades/dossie.png",
        link: "https://canva.link/32aebcv17g7lnt2"
    },

    atividade5: {
        titulo: "Cinema e Totalitarismo ",
        grupo: "Thaylla, Naiara e Carolina",
        descricao: "Nesta atividade, estudamos o conceito de totalitarismo e suas principais características. Em dupla ou trio, escolhemos o filme Cruella para analisar como algumas práticas de poder, controle, manipulação e relações de dominação podem ser observadas na história. A partir do filme, preparamos uma breve apresentação, relacionando cenas e comportamentos dos personagens com os conceitos de totalitarismo estudados em sala.",
        competencias: ["H10 – Compreender as transformações no mundo do trabalho, geradas por mudanças na ordem econômica.",
            "H22 – Analisar, na perspectiva humana e social, as principais características e dinâmicas dos fluxos da sociedade.",
            "H26 – Comparar pontos de vista e ações práticas do indivíduo ou grupo social em diferentes contextos.",
            "H27 – Analisar hipóteses e questões ambientais, sociais, econômicas, políticas e culturais, a partir de leituras e debates."
        ],
        imagem: "atividades/cruella.png",
        link: "https://canva.link/okgjtdhhz60cz2e"
    },

    atividade6: {
        titulo: "Temas Contemporâneos",
        grupo: "Thaylla, Naiara e Carolina",
        descricao: "Nesta atividade, realizamos uma apresentação oral sobre o tema “O controle das redes sociais na China: proteção ou censura?”. Pesquisamos como o governo chinês controla e regulamenta o uso das redes sociais e discutimos os possíveis impactos dessas medidas na sociedade. Organizamos as informações em slides e apresentamos o tema de forma crítica, relacionando-o a questões políticas e sociais.",
        competencias: ["H30 – Analisar as lutas sociais e conquistas obtidas no que se refere às mudanças nas legislações ou nas políticas públicas.",
            "H39 – Relacionar o papel das instituições sociais às soluções para problemas políticos, econômicos, sociais e ambientais no contexto da sociedade brasileira e do mundo.",
            "H40 – Analisar o processo de formação das instituições sociais e políticas, compreendendo seu papel na sociedade."        ],
        imagem: "atividades/china.png",
        link: "https://canva.link/qhtaaez7vo3ji2p"
    }
};

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