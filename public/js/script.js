// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');
    // Adicione funcionalidades JavaScript aqui, se necessário
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste o valor de 80 para o espaço desejado
            behavior: 'smooth'
        });
    });
});
