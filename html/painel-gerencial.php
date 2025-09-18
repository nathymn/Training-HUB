<?php
// Conectar ao banco de dados
require 'connection.php'; // A conexão com o banco de dados deve estar configurada em connection.php

// Consultar número de alunos cadastrados
$query_students = "SELECT COUNT(students_id) FROM tb_students"; // Usando students_id para contar alunos
$result_students = $conn->query($query_students);
$students_count = $result_students->fetch_row()[0]; // Contagem de alunos

// Consultar número de professores cadastrados
$query_teachers = "SELECT COUNT(teachers_id) FROM tb_teachers"; // Usando teachers_id para contar professores
$result_teachers = $conn->query($query_teachers);
$teachers_count = $result_teachers->fetch_row()[0]; // Contagem de professores

// Fechar conexão com o banco
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página do Curador/Painel Gerencial</title>
        <link rel="stylesheet" href="../css/painel-gerencial.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Jersey+25&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    </head>
    <body>
        <header class="header">
            <div class="nav">
                <a href="./index.html"> <img src="../img/logo_indexfunc.svg" alt="logo Synergy"></a>
                <ul class="menu_nav">
                    <li><a href="#">Novas Solicitações</a></li>
                    <li><a href="#">Conteúdo Pendente</a></li>
                    <li><a href="../html/relatorios.html">Relatórios</a></li>
                </ul>
            </div>
            <a style="margin: 1rem;" href="#"> <img src="../img/Profile.svg " alt="logo Synergy"></a>
        </header>

        <div class="dashboard">
            <h1>Painel Gerencial</h1>
            <button class="btn-relatorios">
                <a href="../html/relatorios.html" class="btn-relatorios">Acessar relatórios</a>
            </button>

            <div class="cards">
                <div class="card">
                    <h2>Alunos ativos</h2>
                    <p class="ativos"><?php echo $students_count; ?></p>
                </div>
                <div class="card">
                    <h2>Professores ativos</h2>
                    <p class="ativos"><?php echo $teachers_count; ?></p>
                </div>
            </div>
        </div>

    </body>
    <footer>
        <div class="footer-content">
            <img src="../img/logo_neg.svg" alt="Logo Synergy">

            <ul class="menu-footer" id="menu-footer">
                <li><a href="./cursos.html">Cursos</a></li>
                <li><a href="../html/index.html">Nosso trabalho</a></li>
                <li><a href="./quem_somos.html">Quem somos</a></li>
            </ul>

            <ul class="soc-media-footer">  
                <li><a href="#"><img src="../img/index/linkedin.svg" alt="LinkedIn"></a></li>
                <li><a href="#"><img src="../img/index/instagram.svg" alt="Instagram"></a></li>
                <li><a href="#"><img src="../img/index/contact.svg" alt="Contato"></a></li>
            </ul>

            <button id="scrollToTop"></button> <!-- botão para ir ao topo da página -->
        </div>
    </footer>
    <script src="../js/index_perfil.js"></script>
</html>
