<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'connection.php';

    $curator_name = $_POST['txtNameCurador'];
    $curator_email = $_POST['emailCurador'];
    $curator_birth = $_POST['dateNascCurador'];
    $curator_CPF = $_POST['txtCpfCurador'];
    $curator_phone = $_POST['numbTelCurador'];
    $curator_goal = $_POST['objetivoCurador'];
    $user_password = password_hash($_POST['passAccCurador'], PASSWORD_DEFAULT);

    // Corrigindo a chamada de bind_param
    $stmt = $conn->prepare("CALL pr_InsertTrusteeship(?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $curator_name, $curator_email, $curator_birth, $curator_CPF, $curator_phone, $curator_goal, $user_password);

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
