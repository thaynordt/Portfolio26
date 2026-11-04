// 1. BANCO DE DADOS DAS ATIVIDADES
const dadosAtividades = {
    atividade1: {
        titulo: "Meme sobre evolucionismo",
        grupo: "Thaylla e Marcus",
        descricao: "O meme critica a humanidade ao mostrar que, apesar da evolução e do domínio do planeta, usamos nossa inteligência para alienação tecnológica e destruição ambiental. A sátira sugere que evoluímos biologicamente, mas não em consciência e ética, transformando o progresso em retrocesso.",
        competencias: [
            "C3 - Determinar os impactos das ações humanas nos ambientes, identificando suas causas e propondo soluções para a sua redução",
            "H15 - Comparar propostas de intervenção ambiental aplicando conhecimentos científicos e tecnológicos, observando os riscos e benefícios de sua implementação.", 
            "H18 - Identificar situações de risco ambiental na cidade onde reside."
        ],
        
        // OLHA A MUDANÇA AQUI (agora aponta para a pasta 'atividades' em vez de 'fotos'):
        imagem: "atividades/capa-meme.webp", 
        
        link: "https://drive.google.com/file/d/1li8ABMTs8RyOMEs42ZX0mHJN90EO537F/view?usp=sharing"
    },
    atividade2: {
        titulo: "Combustão e o problema da dependência energética",
        grupo: "Thaylla, Naiara, Marcus, Vitor e Carolina",
        descricao: "Neste trabalho em grupo, analisamos a responsabilidade pela poluição dos combustíveis fósseis. Estudamos os poluentes gerados pela combustão, como CO₂ e CO, seus impactos ambientais e sociais, além de debatermos a participação de indivíduos e indústrias no problema. Também discutimos possíveis soluções para reduzir a dependência energética e seus desafios.",
        competencias: [
    "C1 - Compreender as ciências naturais e as tecnologias como construções humanas associadas à cultura dos povos e suas visões de mundo.",
    "H1 - Interpretar informações apresentadas em diferentes linguagens usadas nas Ciências, como texto discursivo, gráficos, tabelas, relações matemáticas, diagramas ou representação simbólica.",
    "C2 - Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.",
    "H9 - Explicar os conceitos de energia, matéria, vida e transformação para explicar fenômenos naturais e procedimentos tecnológicos.",
    "H11 - Empregar procedimentos e práticas de observação, levantamento de hipótese, experimentação, coleta de dados e conclusões para resolução de problemas relacionados às Ciências da Natureza."
],
        imagem: "atividades/capa-impactos.png",
        link: "https://drive.google.com/file/d/1MXfGweqEBHOFxJCBv6UMNBEZ8JqzEGY9/view?usp=sharing"
    },

    atividade3: {
        titulo: "CARGA ELÉTRICA E ELETROESTÁTICA",
        grupo: "Individual",
        descricao: "Nesta atividade prática de Física, realizamos um experimento sobre eletrização por atrito utilizando um cano de PVC e uma bolinha de alumínio. Observamos que, ao esfregar o cano em outro material, ele ficava eletrizado e conseguia atrair a bolinha metálica. Com isso, aprendemos sobre movimentação de elétrons, cargas elétricas opostas e a capacidade dos metais de conduzirem eletricidade. A experiência ajudou a compreender, de forma prática, conceitos importantes da eletrostática.",
        competencias: ["C1 - Compreender as ciências naturais e as tecnologias como construções humanas associadas à cultura dos povos e suas visões de mundo., H1 - Interpretar informações apresentadas em diferentes linguagens usadas nas Ciências, como texto discursivo, gráficos, tabelas, relações matemáticas, diagramas ou representação simbólica., C2 - Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica., H7 - Compreender os conceitos relacionados à Química nos seus diferentes ramos: Fisico-química, Química orgânica e Química Geral., H9 - Explicar os conceitos de energia, matéria, vida e transformação para explicar fenômenos naturais e procedimentos tecnológicos., H11 - Empregar procedimentos e práticas de observação, levantamento de hipótese, experimentação, coleta de dados e conclusões para resolução de problemas relacionados às Ciências da Natureza., H12 - Relacionar informações para construir modelos em ciência e tecnologia."],
        imagem: "atividades/capa-eletro.png",
        link: "https://drive.google.com/file/d/15oeHrHjj5hluoobIC39-8Bu3a6rFA4ZW/view?usp=sharing"
    },

     atividade6: {
        titulo: "SEMINÁRIO SOBRE ESTEQUIOMETRIA NA INDÚSTRIA",
        grupo: "Thaylla, Naiara, Carolina, Marcus e Vitor",
        descricao: "Nesta atividade, pesquisamos a aplicação da estequiometria na produção de ácido sulfúrico, destacando sua importância nos setores de fertilizantes e mineração. Também abordamos o processo de produção, o desenvolvimento industrial e a importância do controle das emissões atmosféricas.",
        competencias: ["C2 - Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica",
"H6 - Compreender os conceitos relacionados à Física em seus diferentes ramos: Astronomia, Mecânica, Acústica, Óptica, Termologia, Calorimetria, Ondulatória, Eletricidade, Magnetismo e Física Moderna e Nuclear",
"H7 - Compreender os conceitos relacionados à Química nos seus diferentes ramos: Físico-química, Química orgânica e Química Geral.",
"H9 - Explicar os conceitos de energia, matéria, vida e transformação para explicar fenômenos naturais e procedimentos tecnológicos."],
        imagem: "atividades/capa-estequiometria.png",
        link: "https://www.canva.com/design/DAHNY_YlvaI/n9QKSm35WXR1jokGxdDuYQ/edit?utm_content=DAHNY_YlvaI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },

     atividade5: {
        titulo: "CARTILHA ELETRICIDADE E O CORPO HUMANO",
        grupo: " Thaylla, Naiara e Carolina",
        descricao: "Nesta atividade, produzimos em grupo uma cartilha informativa sobre eletricidade e o corpo humano. Pesquisamos como a corrente elétrica interage com o organismo, seus efeitos e riscos, formas de prevenção de acidentes e aplicações da eletricidade na área da saúde. A cartilha foi organizada com textos, imagens, orientações de segurança, curiosidades e referências, utilizando uma linguagem clara e acessível.",
        competencias: ["C1 - Compreender as ciências naturais e as tecnologias como construções humanas associadas à cultura dos povos e suas visões de mundo.",
"H3 - Inferir significado de termos técnico-científicos em textos de instrumentação ou de divulgação científica.",
"H4 - Identificar, em textos, diagramas, gráficos, imagens e tabelas, informações relevantes para compreender um fenômeno ou conceito.",
"C2 - Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.",
"H12 - Relacionar informações para construir modelos em ciência e tecnologia.",
"C4 - Compreender o funcionamento dos organismos vivos em geral e o ser humano em especial, considerando suas relações com o ambiente em que vivem, abordando aspectos físicos e socioculturais.",
"H23 - Formular propostas de alcance individual ou coletivo, utilizando como critérios a preservação e a promoção da saúde individual e coletiva."],
        imagem: "atividades/capa-cartilha.png",
        link: "https://www.canva.com/design/DAHPXLk4tP0/CYkllDlqK51eGgIgxfJcnA/edit"
    },

     atividade4: {
        titulo: "Mural interativo",
        grupo: "Thaylla e turma toda",
        descricao: "Nesta atividade, participamos da criação de um mural científico interativo sobre a relação entre meio ambiente e saúde. Minha participação foi responsável pela criação e organização dos QR Codes, que ajudaram a tornar o mural mais interativo e facilitar o acesso às informações complementares.",
        competencias: ["C2 –Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.",
"H11 – Empregar procedimentos e práticas de observação, coleta de dados e conclusões para resolução de problemas relacionados às Ciências da Natureza.",
"C3 – Determinar os impactos das ações humanas nos ambientes, identificando suas causas e propondo soluções para a sua redução.",
"H15 – Comparar propostas de intervenção ambiental aplicando conhecimentos científicos e tecnológicos, observando os riscos e benefícios de sua implementação.",
"H18 – Identificar situações de risco ambiental na cidade onde reside.",
"C4 - Compreender o funcionamento dos organismos vivos em geral e o ser humano em especial, considerando suas relações com o ambiente em que vivem, abordando aspectos físicos e socioculturais.",
"H23 – Formular propostas de alcance individual ou coletivo, utilizando como critérios a preservação e a promoção da saúde individual e coletiva."],
        imagem: "atividades/capa-mural.png",
        link: "https://drive.google.com/file/d/1p9IfN3CbunX-GzqSoSeV5JnLeWwFCTXT/view?usp=sharing"
    },

    atividade7: {
        titulo: " CICLOS BIOGEOQUÍMICOS",
        grupo: "Thaylla, Naiara e Carolina",
        descricao: "Nesta atividade, participamos da criação de um painel científico sobre os ciclos biogeoquímicos e a mortandade de peixes. Minha participação envolveu a pesquisa e organização das informações, compreendendo as causas do desequilíbrio ambiental e a importância de ações sustentáveis para preservar os ecossistemas aquáticos.",
        competencias: ["C1- Compreender as ciências naturais e as tecnologias como construções humanas associadas à cultura dos povos e suas visões de mundo.",
"H4- Identificar, em textos, diagramas, gráficos, imagens e tabelas, informações relevantes para compreender um fenômeno ou conceito relacionado às Ciências da Natureza.",
"C2 –Aplicar os conceitos fundamentais e estruturas procedimentais das Ciências da Natureza na explicação de fenômenos cotidianos, bem como dominar processos e práticas da investigação científica.",
"H11- Empregar procedimentos e práticas de observação, levantamento de hipótese, experimentação, coleta de dados e conclusões para resolução de problemas relacionados às Ciências da Natureza.",
"C5 –Determinar as características das tecnologias associadas às Ciências da Natureza aplicadas em diferentes serviços ou contextos.",
"H24- Descrever as propriedades físicas, químicas e/ou biológicas dos materiais relacionando-os às finalidades as quais que se destinam."],
        imagem: "atividades/painel-3tri.png",
        link: "https://drive.google.com/file/d/1BIvDJCCcElWFgTi72cG4fKpkRqDF0H5b/view?usp=sharing"
    },

    atividade8: {
        titulo: "MAGNETISMO NO MUNDO REAL",
        grupo: "Thaylla e Marcus",
        descricao: "Nesta atividade, participamos da criação de um infográfico científico sobre o magnetismo no mundo real, utilizando o fogão de indução como exemplo de aplicação tecnológica. Minha participação envolveu a pesquisa e organização das informações sobre seu funcionamento, propriedades magnéticas e o cientista relacionado, além da elaboração de um esquema explicativo para facilitar a compreensão do conteúdo.",
        competencias: ["C5 - Determinar as características das tecnologias associadas às Ciências da Natureza aplicadas em diferentes serviços ou contextos produtivos: indústria, manufatura, agricultura, agroindústria, extrativismo.",
"H26 - Utilizar manuais para conhecer os processos de instalação e operação de diferentes equipamentos.",
"H27 - Executar testes de controle para a comparação de serviços, materiais e produtos, utilizando parâmetros como custo e eficiência, empregabilidade, efeito colateral, riscos e benefícios.",
"H28 - Reconhecer e utilizar nomenclatura e códigos científicos e tecnológicos para caracterizar materiais, substâncias e processos."],
        imagem: "atividades/fogao-de-inducao.jpg",
        link: "https://drive.google.com/file/d/15ikPAQrNLCzomzrjNYdIQQ_-MbQ-Knzh/view?usp=sharing"
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

