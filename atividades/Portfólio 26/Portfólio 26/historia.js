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
        titulo: "Geopolítica",
        grupo: "Thaylla, Naiara e Carolina",
        descricao: "Nós escolhemos o Vietnã e apresentamos a sua trajetória histórica por meio de imagens, abordando a colonização, as mudanças na população, a independência e a situação atual.",
        competencias: ["C2 - H8, H10, H12"],
        imagem: "atividades/capa-imperialismo.png",
        link: "https://drive.google.com/file/d/15o_swbtFP1ozy8yIRKzRkaeeoc07c9Fi/view?usp=sharing"
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