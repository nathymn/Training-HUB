<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'connection.php';

    $teacher_name = $_POST['txtNameTeacher'];
    $teacher_email = $_POST['emailTeacher'];
    $teacher_birth = $_POST['dateNascTeacher'];
    $teacher_CPF = $_POST['txtCpfTeacher'];
    $teacher_phone = $_POST['numbTelTeacher'];
    $user_password = password_hash($_POST['passAccTeacher'], PASSWORD_DEFAULT);

    // Corrigindo a chamada de bind_param
    $stmt = $conn->prepare("CALL pr_InsertTeacher(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $teacher_name, $teacher_email, $teacher_birth, $teacher_CPF, $teacher_phone, $user_password);

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
