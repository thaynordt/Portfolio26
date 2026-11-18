const dadosAtividades = {
    
 atividade1: {
        titulo: "Hackaton",
        grupo: "Thaylla, Naiara e Carolina",
        descricao: "Desenvolvemos uma proposta para conectar os interesses dos jovens às marcas e empresas, aproximando o público das oportunidades de tecnologia e inovação. O objetivo é criar estratégias que incentivem o patrocínio de conteúdos tecnológicos na televisão, tornando-os mais atrativos, acessíveis e relevantes para a nova geração.",
        competencias: ["Não foi informado"],
        imagem: "fotos/emotion.png",
        link: "https://youtu.be/IvHSwjKtGNE"
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