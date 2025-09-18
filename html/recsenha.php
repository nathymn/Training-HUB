<?php
// Verificar se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'connection.php';

    $email = $_POST['email'];
    $nova_senha = $_POST['nova_senha'];
    $new_user_password = password_hash($_POST['nova_senha'], PASSWORD_DEFAULT);

    // Corrigindo a chamada de bind_param
    $stmt = $conn->prepare("CALL pr_RecoverPassword(?, ?)");
    $stmt->bind_param("ss", $email, $new_user_password);

    if ($stmt->execute()) {
        header("Location: login_data.html");
        exit;
    } else {
        echo "Erro ao cadastrar curador: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperação de Senha</title>
    <link rel="stylesheet" href="../css/rec_senha">
</head>
<body>
    <h2>Recuperação de Senha</h2>
    <form action="recsenha.php" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="nova_senha">Nova Senha:</label>
        <input type="password" id="nova_senha" name="nova_senha" required><br><br>
        
        <input style="padding: 1rem; margin-left: .7rem;" class="btn-rec" type="submit" value="Recuperar Senha">
    </form>
</body>
</html>
