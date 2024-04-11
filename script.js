function toggleAccordion(header) {
    // Obtém o próximo elemento irmão do cabeçalho
    var content = header.nextElementSibling;

    // Alterna a classe "active" no item do acordeão
    header.parentNode.classList.toggle('active');

    // Se o item do acordeão estiver ativo
    if (header.parentNode.classList.contains('active')) {
        // Define a altura máxima para mostrar o conteúdo
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        // Se não estiver ativo, oculta o conteúdo
        content.style.maxHeight = '0';
    }
}