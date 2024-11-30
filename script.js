function toggleCard(item) {
    const card = item.nextElementSibling; // Busca la tarjeta asociada
    card.style.display = card.style.display === 'block' ? 'none' : 'block';
}
