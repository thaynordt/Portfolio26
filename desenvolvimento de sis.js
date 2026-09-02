const dadosAtividades = {
    
 atividade1: {
        titulo: "Gateway de Pagamento",
        grupo: "Thaylla, Marcus, Naiara, Vitor e Carolina",
        descricao: "Desenvolvemos o Gateway de Pagamento, um sistema que permite processar transações financeiras de forma segura e eficiente. O objetivo é oferecer uma solução completa para integração com diferentes meios de pagamento, garantindo a melhor experiência para os usuários.",
        competencias: ["Não foi informado"],
        imagem: "fotos/gateyay.png",
        link: "https://github.com/Marcus-Verissimo-Bastos/RinhaSenai2026FullStack"
    }
};

const botoesTri = document.querySelectorAll('.btn-tri');
const cards = document.querySelectorAll('.card');

botoesTri.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesTri.forEach(b => b.classList.remove('active'));
        botao.classList.add('active');

        const triSelecionado = botao.getAttribute('data-tri');

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

function openDetails(id) {
    const info = dadosAtividades[id];
    
    document.getElementById('modalTitle').innerText = info.titulo;
    document.getElementById('modalGroup').innerText = info.grupo;
    document.getElementById('modalDesc').innerText = info.descricao;
    document.getElementById('modalImage').src = info.imagem;
    document.getElementById('modalLink').href = info.link;

    const lista = document.getElementById('modalComp');
    lista.innerHTML = "";

    let listaFinal = [];

    if (info.competencias.length === 1 && info.competencias[0].includes('.,')) {
        listaFinal = info.competencias[0].split('.,');
    } else {
        listaFinal = info.competencias;
    }

    listaFinal.forEach(comp => {
        if (comp.trim() !== "") { 
            let li = document.createElement('li');
            li.innerText = comp.trim();
            lista.appendChild(li);
        }
    });

    document.getElementById('fullScreenModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}
function closeDetails() {
    document.getElementById('fullScreenModal').style.display = 'none';
    document.body.style.overflow = 'auto'; 
}