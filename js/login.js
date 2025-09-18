const btnMenu = document.getElementById('btn-menu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const header = document.getElementById('header');
    if (nav.classList.contains('active')) { // quando o menu estiver aberto:
        header.style.backgroundColor = '#BC4ED8';
    
    } else { // quando o menu estiver fechado
        header.style.backgroundColor = 'transparent';
    
    }

}


btnMenu.addEventListener('click', toggleMenu);


//Abre página de login dos usuários
function loginPage() {
    const btnsLogin = document.querySelectorAll('.login-click'); // Seleciona todos os botões com a classe 'login-click'
    
    btnsLogin.forEach(button => {
        button.addEventListener('click', function() {
            // Redirecionar para página de login
            window.location.href = '../html/login_data.html';
        });
    });
}

function registerPage() {
    const btnsLogin = document.querySelectorAll('.cad-click'); // Seleciona todos os botões com a classe 'login-click'
    
    btnsLogin.forEach(button => {
        button.addEventListener('click', function() {
            // Redirecionar para página de login
            window.location.href = '../html/register.html';
        });
    });
}

