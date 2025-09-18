<?php
session_start();
require 'connection.php'; // Conexão com o banco de dados

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['emailLog'];
    $password = $_POST['passLog'];

    // Consulta SQL para buscar o usuário com o email fornecido
    $stmt = $conn->prepare("SELECT logins_id, user_password, user_type FROM tb_logins WHERE user_email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($logins_id, $hashed_password, $user_type);
        $stmt->fetch();

        // Verificar senha
        if (password_verify($password, $hashed_password)) {
            $_SESSION['user_id'] = $logins_id;
            $_SESSION['user_type'] = $user_type;

            // Redirecionar com base no tipo de usuário
            switch ($user_type) {
                case '1':
                    header("Location: index_student.html");
                    break;
                case '2':
                    header("Location: index_teacher.html");
                    break;
                case '3':
                    header("Location: index_curator.html");
                    break;
                default:
                    header("Location: login_data.html");
                    break;
            }
            exit; // Impede a execução de qualquer código após o redirecionamento
        } else {
            echo "<script>
                    alert('Senha incorreta.');
                    window.location.href = 'login_data.html';
                  </script>";
        }
    } else {
        echo "<script>
                alert('Usuário não encontrado.');
                window.location.href = 'login_data.html';
              </script>";
    }
    $stmt->close();
} else {
    echo "<script>
            alert('Método de requisição inválido.');
            window.location.href = 'login_data.html';
          </script>";
}

$conn->close();
?>
