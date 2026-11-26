
let pos1 = 0;
let pos2 = 0;

function moverCarrossel(direcao) {
    const track = document.getElementById('track1');
    if (!track) return;

    const cards = track.querySelectorAll('.card-materia');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20;
    const maxScroll = (cards.length - 2) * cardWidth;

    pos1 += (direcao === 1) ? -cardWidth : cardWidth;

    if (pos1 < -maxScroll) pos1 = -maxScroll;
    if (pos1 > 0) pos1 = 0;

    track.style.transform = `translateX(${pos1}px)`;
}

function moverCarrossel2(direcao) {
    const track = document.getElementById('track2');
    if (!track) return;

    const cards = track.querySelectorAll('.card-materia');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20;
    const maxScroll = (cards.length - 2) * cardWidth;

    pos2 += (direcao === 1) ? -cardWidth : cardWidth;

    if (pos2 < -maxScroll) pos2 = -maxScroll;
    if (pos2 > 0) pos2 = 0;

    track.style.transform = `translateX(${pos2}px)`;
}


const MATERIAS = {
    humanas: {
        titulo: "Humanas",
        atividades: [
            {
                ano: "3º ano",
                titulo: "A Grande Guerra – Reino Unido",
                grupo: "Thaylla, Marcus Vinicius e João Pedro",
                descricao: "A atividade consistia em refletir sobre os meios de comunicação no início do século XX e criar a capa de um jornal da época. O grupo escolheu a Batalha de Somme (01 de julho de 1916), o dia mais mortal do exército britânico.",
                competencias: ["C3 - H15, H16, H20", "C6 - H39"],
                imagem: "banca/capa-guerra.png",
                link: "https://drive.google.com/file/d/1sOWJ9BT3DnYEtA_66_QcbUGTtoviuPrS/view?usp=sharinghttps://drive.google.com/file/d/1sOWJ9BT3DnYEtA_66_QcbUGTtoviuPrS/view?usp=sharing"
            },
            {
                ano: "2º ano",
                titulo: "Livreto Turístico Digital – Argélia",
                objetivo: "Produzir e apresentar um Livreto Turístico Digital sobre a Argélia, atuando como uma equipe de guias especializados desse país. A proposta faz parte da Expedição Cultural & Geográfica: Embaixadores Turísticos do Continente Africano, cujo foco é celebrar o Mês da Consciência Negra por meio da valorização da diversidade cultural, histórica e geográfica do continente.",
                competencias: ["H26 e H27"],
                comentario: "A experiência de pesquisar sobre a Argélia foi muito enriquecedora. Ao montar o livreto turístico, pude conhecer mais sobre sua cultura, paisagens, história e formas de organização social. Gostei especialmente de perceber como o país vai muito além dos estereótipos, revelando um patrimônio imenso e diverso. Criar a apresentação como se eu fosse uma guia turística tornou o processo ainda mais envolvente, permitindo imaginar como seria apresentar essas descobertas para outras pessoas. Foi uma atividade divertida, criativa e cheia de aprendizados.",
                imagem: "banca/argelia.png",
                link: "https://drive.google.com/file/d/1bhZk1OYluj-F9gqGwXIzgsz7AAga6s_b/view"
            }
        ]
    },

    linguagens: {
        titulo: "Linguagens",
        atividades: [
            {
                ano: "3º ano",
                titulo: "Manifesto Antropófago e Manifesto Pau-Brasil",
                grupo: "Thaylla, Naiara e Carolina",
                descricao: "Nessa atividade, estudamos o gênero manifesto a partir do Manifesto Pau-Brasil e do Manifesto Antropófago, de Oswald de Andrade. Em grupo, criamos um manifesto contemporâneo em formato de vídeo, escolhendo um tema atual e utilizando argumentos, criatividade e frases de impacto. A atividade também envolveu a criação de roteiro, produção e edição do vídeo, buscando provocar reflexão no público.",
                competencias: ["H3 e H24"],
                imagem: "atividades/capa-manifesto.png",
                link: "https://www.youtube.com/watch?v=Z9Gvr4Xk5N8&feature=youtu.be"
            },
            {
                ano: "2º ano",
                titulo: "Povo Karajá",
                objetivo: "Pesquisar e apresentar informações sobre o povo Karajá, conhecendo melhor sua cultura, língua, crenças, tradições e localização geográfica, e criar um site para compartilhar esse conhecimento com outras pessoas.",
                competencias: ["H4, H14, H17"],
                comentario: "Pesquisando sobre os Karajá, aprendi muita coisa que eu não fazia ideia. Descobri que eles vivem principalmente às margens do Rio Araguaia, em estados como Tocantins, Goiás, Mato Grosso e Pará. O mais interessante foi ver como eles mantêm viva a língua Iny Karajá, que é ensinada desde cedo às crianças. Me chamou atenção também o cuidado que eles têm com a natureza, a força das mulheres na cultura e os rituais tradicionais, como as festas de iniciação.",
                imagem: "banca/karaja.png",
                link: "https://sites.google.com/estudante.sesisenai.org.br/povoskarajas/in%C3%ADcio"
            }
        ]
    },

    natureza: {
        titulo: "Natureza",
        atividades: [
            {
                ano: "3º ano",
                titulo: "Destilação de Alecrim",
                grupo: "Thaylla, Naiara A, Carolina, Vitor G, Gustavo G, João P, Nicolas e Ismael",
                descricao: "Nesta atividade, participamos da produção de um projeto científico sobre a destilação do alecrim, relacionando conceitos de Química Orgânica à extração de óleos essenciais. Minha participação envolveu a pesquisa e organização das informações sobre a composição química da planta, suas propriedades e aplicações, além da realização do experimento de destilação por arraste a vapor, análise dos resultados e registro do processo em uma cartilha ilustrada.",
                competencias: [
                    "C5 - Determinar as características das tecnologias associadas às Ciências da Natureza aplicadas em diferentes serviços ou contextos produtivos: indústria, manufatura, agricultura, agroindústria, extrativismo.",
                    "H12 – Relacionar informações para construir modelos em Ciência e Tecnologia.",
                    "H24 – Descrever propriedades físicas, químicas e/ou biológicas dos materiais, relacionando-as às suas finalidades.",
                    "H25 – Identificar matérias-primas e etapas de transformação, descrevendo processos físicos, químicos e/ou biológicos."
                ],
                imagem: "banca/oleo.png",
                link: "https://canva.link/1zbure3pbiljx58"
            },
            {
                ano: "2º ano",
                titulo: "Materiais inspirados na natureza",
                objetivo: "Investigar como estruturas e organismos da natureza podem inspirar a criação de novos materiais tecnológicos, com foco em soluções sustentáveis. A partir de temas como oceano, rios, deserto e floresta, os grupos criaram propostas de materiais inovadores, considerando propriedades como resistência, flexibilidade e durabilidade. A atividade envolveu pesquisa, desenvolvimento de conceitos e modelagem 3D dos projetos.",
                competencias: [],
                comentario: "Achei a proposta muito interessante! É legal perceber como a natureza pode inspirar soluções tecnológicas e sustentáveis. Foi desafiador pensar em um material totalmente novo, mas trabalhar em grupo ajudou bastante. Criar o modelo 3D foi uma das partes mais legais, porque deu pra visualizar nossa ideia ganhando forma.",
                imagem: "banca/lotus.png",
                link: "https://canva.link/k2ead0ebfhx2com"
            }
        ]
    },

    matematica: {
        titulo: "Matemática",
        atividades: [
            {
                ano: "3º ano",
                titulo: "TMNVC 360",
                grupo: "Thaylla, Naiara e Carolina",
                descricao: "Nesta atividade, desenvolvemos um ciclo trigonométrico interativo, aplicando conceitos de trigonometria na criação de um material pedagógico. Realizamos o planejamento, o esboço e a construção do protótipo, utilizando tecnologia e impressão 3D para facilitar o aprendizado.",
                competencias: [
                    "C2 - Reconhecer e utilizar a linguagem algébrica e suas representações como a linguagem das ciências, necessária para expressar a relação entre grandezas e criar modelos descritivos permitindo conexões da matemática, com em fenômenos, sistemas naturais e tecnológicos.",
                    "H5 - Ler e interpretar diferentes linguagens e representações envolvendo variações de grandezas.",
                    "H16 - Compreender e construir modelos que correspondem a fenômenos periódicos."
                ],
                imagem: "atividades/tmnvc.png",
                link: "https://docs.google.com/document/d/1r2-UCiVTo0go3JIz91DNRmnSCkMMBGBFAdh_a21of84/edit?tab=t.0"
            },
            {
                ano: "2º ano",
                titulo: "Paper Craft",
                objetivo: "Iniciar a produção dos Papers Craft, aplicando conceitos de geometria plana para construir objetos tridimensionais.",
                competencias: ["C3, H18"],
                comentario: "A atividade foi muito interessante, pois uniu teoria e prática, facilitando a compreensão da geometria por meio da construção e montagem dos personagens. Uma ótima forma de aprender de maneira criativa e envolvente!",
                imagem: "banca/paper.png",
                link: "https://www.canva.com/design/DAGwtPTsYeU/CiAHgqG1LfczIPi94z23Kw/view?embed"
            }
        ]
    },

    tecnico: {
        titulo: "Técnico",
        atividades: [
            {
                ano: "3º ano",
                titulo: "SA – Vybe",
                grupo: "Thaylla, Marcus, Naiara, Vitor e Carolina",
                descricao: "Na SA de Modelagem de Sistemas, desenvolvemos a Vybe, uma empresa inovadora na qual você encontra pessoas e lugares que combinam com a sua vibe e estilo. A proposta é conectar pessoas com interesses em comum e indicar ambientes que tenham a mesma energia que você procura, permitindo dar match, conhecer novas pessoas, visitar lugares e viver experiências mais alinhadas com sua personalidade.",
                competencias: [],
                imagem: "banca/vybe.png",
                link: "https://canva.link/eadr01cnfd4q1bz"
            },
        
            {
                ano: "2º ano",
titulo: "Glossário Técnico",
objetivo: "Desenvolver um site autoral utilizando HTML e CSS para apresentar um glossário técnico com explicações sobre tags HTML e propriedades CSS. O projeto teve como objetivo facilitar a consulta e o aprendizado dos conceitos de desenvolvimento web, por meio de exemplos práticos, organização do conteúdo e um layout intuitivo.",
competencias: ["H5, H8"],
comentario: "Foi uma experiência muito interessante desenvolver um site do zero e colocar em prática os conhecimentos de HTML e CSS. Aprendemos a organizar as informações, criar exemplos de código e desenvolver um layout próprio. O maior desafio foi deixar o site bonito, organizado e funcional, mas ver tudo funcionando no final foi muito gratificante. Também foi uma oportunidade de desenvolver nossa criatividade e aprofundar os conhecimentos em programação.",
imagem: "banca/glossario.png",
link: "https://siteglossariotecnico.netlify.app/"
            }
            
        ]
    }
};


const painel = document.getElementById('painel');
const painelTitulo = document.getElementById('painel-titulo');
const painelCorpo = document.getElementById('painel-corpo');
let ultimoGatilho = null;

function esc(texto) {
    const d = document.createElement('div');
    d.textContent = texto;
    return d.innerHTML;
}

function pendente(valor) {
    return !valor || valor.includes('xxxxx');
}

function montarAtividade(a) {
    const texto = a.descricao || a.objetivo || '';
    const rotuloTexto = a.descricao ? 'Descrição' : 'Objetivo';

    const imagem = pendente(a.imagem)
        ? `<div class="ativ-img ativ-img-vazia">Imagem em breve</div>`
        : `<img class="ativ-img" src="${esc(a.imagem)}" alt="${esc(a.titulo)}">`;

    const competencias = a.competencias && a.competencias.length
        ? `<ul>${a.competencias.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`
        : `<p>Não foi informado</p>`;

    const link = pendente(a.link)
        ? ''
        : `<a class="ativ-link" href="${esc(a.link)}" target="_blank" rel="noopener">Ver atividade</a>`;

    return `
        <article class="ativ">
            ${imagem}
            <div class="ativ-texto">
                <span class="ativ-ano">${esc(a.ano)}</span>
                <h4>${esc(a.titulo)}</h4>
                ${a.grupo ? `<p class="ativ-grupo"><strong>Grupo:</strong> ${esc(a.grupo)}</p>` : ''}
                <h5>${rotuloTexto}</h5>
                <p>${esc(texto)}</p>
                <h5>${a.objetivo ? 'Competências e Habilidades' : 'Competências'}</h5>
                ${competencias}
                ${a.comentario ? `<h5>Comentário pessoal</h5><p>${esc(a.comentario)}</p>` : ''}
                ${link}
            </div>
        </article>`;
}

function abrirMateria(id, gatilho) {
    const materia = MATERIAS[id];
    if (!materia) return;

    ultimoGatilho = gatilho || null;
    painelTitulo.textContent = materia.titulo;

    painelCorpo.innerHTML = materia.atividades.length
        ? materia.atividades.map(montarAtividade).join('')
        : `<p class="painel-vazio">Nenhuma atividade adicionada ainda nesta matéria.</p>`;

    painel.hidden = false;
    document.body.classList.add('painel-aberto');
    painelCorpo.scrollTop = 0;
    painel.querySelector('.painel-fechar').focus();
}

function fecharMateria() {
    painel.hidden = true;
    document.body.classList.remove('painel-aberto');
    if (ultimoGatilho) ultimoGatilho.focus();
}

document.addEventListener('click', (e) => {
    const botao = e.target.closest('[data-materia]');
    if (botao) {
        e.preventDefault();
        abrirMateria(botao.dataset.materia, botao);
        return;
    }
    if (e.target === painel || e.target.closest('.painel-fechar')) {
        fecharMateria();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !painel.hidden) fecharMateria();
});