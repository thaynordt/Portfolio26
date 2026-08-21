const dadosAtividades = {
    atividade1: {
        titulo: "SA - Vybe",
        grupo: "Thaylla, Marcus, Naiara, Vitor e Carolina",
        descricao: "Na SA de Modelagem de Sistemas, desenvolvemos a Vybe, uma empresa inovadora na qual você encontra pessoas e lugares que combinam com a sua vibe e estilo. A proposta é conectar pessoas com interesses em comum e indicar ambientes que tenham a mesma energia que você procura, permitindo dar match, conhecer novas pessoas, visitar lugares e viver experiências mais alinhadas com sua personalidade.",
        competencias: ["Não foi informado"],
        imagem: "atividades/capa-vybe.png", 
        
        link: "https://drive.google.com/drive/folders/1-aqlpwAhWJ8hCDIKxfDM6OfTFHXU6bs2?usp=sharing"
    },
    
    atividade2: {
        titulo: "Gateway de Pagamento",
        grupo: "Thaylla, Marcus, Naiara, Vitor e Carolina",
        descricao: "Desenvolvemos o Gateway de Pagamento, um sistema que permite processar transações financeiras de forma segura e eficiente. O objetivo é oferecer uma solução completa para integração com diferentes meios de pagamento, garantindo a melhor experiência para os usuários.",
        competencias: ["Não foi informado"],
        imagem: "atividades/rinha.png",
        link: "https://desafio-bp.netlify.app/"
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

