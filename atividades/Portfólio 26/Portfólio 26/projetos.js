let pos1 = 0;
let pos2 = 0;

function moverCarrossel(direcao) {
    const track = document.getElementById('track1');
    if (!track) return; // Segurança: se não achar o track1, não faz nada

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
    if (!track) return; // Segurança: se não achar o track2, não faz nada

    const cards = track.querySelectorAll('.card-materia');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20; 
    const maxScroll = (cards.length - 2) * cardWidth;

    pos2 += (direcao === 1) ? -cardWidth : cardWidth;

    if (pos2 < -maxScroll) pos2 = -maxScroll;
    if (pos2 > 0) pos2 = 0;

    track.style.transform = `translateX(${pos2}px)`;
}