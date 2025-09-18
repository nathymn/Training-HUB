const scrollToTopButton = document.getElementById("scrollToTop");

// Função para rolar suavemente até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Suaviza o scroll
    });
}

// Mostrar ou esconder o botão ao rolar a página
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Evento de clique no botão
scrollToTopButton.addEventListener("click", scrollToTop);