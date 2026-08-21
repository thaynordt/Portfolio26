const dadosAtividades = {
    atividade1: {
        titulo: "Grand Prix",
        grupo: "Thaylla, Marcus, Naiara, Vitor e Carolina",
        descricao: "Desenvolvimento de uma solução sustentável, inovadora e tecnicamente viável, baseada nos princípios dos 3Rs, reduzir, reusar e reciclar. A proposta será apresentada por meio de um relatório técnico completo e um pitch estruturado, evidenciando o potencial de redução da pegada de carbono do componente e sua aplicação prática na indústria automotiva.",
        competencias: ["Não foi informado"],
        // OLHA A MUDANÇA AQUI (agora aponta para a pasta 'atividades' em vez de 'fotos'):
        imagem: "atividades/capa-grandprix.png", 
        
        link: "https://docs.google.com/presentation/d/1LXQ-HIm5X-O32Pn53PUcMacIbhH999obLoxKB07pg-0/edit?usp=sharing"
    },
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

