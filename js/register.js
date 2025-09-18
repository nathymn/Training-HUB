//Cadastro do Aluno
function cadastro_student(){
    const btnLogin = document.getElementById('student-reg');
    btnLogin.addEventListener('click', function() {
        window.location.href = '../html/register_student.html'
    });
}


//Cadastro do Professor
function cadastro_teacher(){
    const btnLogin = document.getElementById('teacher-reg');
    btnLogin.addEventListener('click', function() {
        // Redirecionar para página de login
        window.location.href = '../html/register_teacher.html';
    });
}


//Cadastro do Curador
function cadastro_curador(){
    const btnLogin = document.getElementById('curator-reg');
    btnLogin.addEventListener('click', function() {
        // Redirecionar para página de login
        window.location.href = '../html/register_curator.html';
    });
}