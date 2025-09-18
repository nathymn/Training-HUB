const btnMenu = document.getElementById('btn-menu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    // configurações de acordo com o menu aberto
    const header = document.getElementById('header');
    const container = document.getElementById('container');
    const btnAcc =  document.getElementById('btn-acc');
    const accSoc = document.getElementById('acc-soc');
    const Sch = document.getElementById('sch');
    if (nav.classList.contains('active')) { // quando o menu estiver aberto:
        header.style.backgroundColor = '#00064B'; // Cor de fundo do header ao abrir
        container.style.display = 'block';    // deixa o conteudo do cabeçalho um embaixo do outro
        btnAcc.style.position = 'absolute'; // posisiconamento dos botoes quando o menu esta aberto
        btnAcc.style.margin = '0 41rem';    // espaçamento dos botoes depois das redes sociais quando o menu esta aberto
        accSoc.style.padding = '2rem 11rem 2rem 11rem';   // tamanho do conteudo abaixo do menu nav
        accSoc.style.backgroundColor = 'white'; // cor da barra abaixo do menu nav branca
        Sch.style.display = 'block'; // campo de busca aparece quando o menu esta aberto
        Sch.style.position = 'absolute'; // campo de busca fica depois das redes sociais com o menu aberto
        Sch.style.margin = '0 12rem';   // espaçamento de busca 
    } else { // quando o menu estiver fechado
        header.style.backgroundColor = 'transparent'; // Cor de fundo do header padrão
        container.style.display = 'flex'; // deixa o conteudo do cabeçalho lado a lado
        btnAcc.style.position = 'relative'; // posisiconamento dos botoes antes das redes sociais quando o menu esta fechado
        btnAcc.style.margin = '0 6rem'  // espaçamento dos botoes antes das redes sociais quando o menu esta fechado
        accSoc.style.padding = '0'; // tamanho do conteudo com o menu nav fechado
        accSoc.style.background = 'none'; // cor da barra abaixo do menu nav sem cor quando o menu esta fechado
        Sch.style.display = 'none'; // campo de busca some 
    }
}

btnMenu.addEventListener('click', toggleMenu);

//função de direcionar para registro
function register(){
    const btnRegister = document.getElementById('btn-reg');
    btnRegister.addEventListener('click', function() {
        // Redirecionar para página de registro
        window.location.href = '../html/register.html';
    });
}

//função de direcionar para login
function login(){
    const btnLogin = document.getElementById('btn-log');
    btnLogin.addEventListener('click', function() {
        // Redirecionar para página de login
        window.location.href = '../html/login.html';
    });
}

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