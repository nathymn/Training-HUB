<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'connection.php'; // Inclui a conexão com o banco

    // Dados do aluno
    $student_name = $_POST['txt-name'];
    $student_email = $_POST['emailAluno'];
    $student_birth = $_POST['numb-nasc'];
    $student_CPF = $_POST['numb-cpf'];
    $student_phone = $_POST['numb-tel'];
    $user_password = password_hash($_POST['pass-acc'], PASSWORD_DEFAULT);

    // Verifica se o aluno tem menos de 16 anos
    $current_date = new DateTime();
    $birth_date = new DateTime($student_birth);
    $age = $current_date->diff($birth_date)->y;

    $conn->begin_transaction(); // Início do controle transacional

    try {
        // Chama a procedure para cadastrar o aluno
        $stmt_student = $conn->prepare("CALL pr_InsertStudent(?, ?, ?, ?, ?, ?)");
        $stmt_student->bind_param("ssssss", $student_name, $student_email, $student_birth, $student_CPF, $student_phone, $user_password);
        $stmt_student->execute();

        // Recupera o último ID inserido para o aluno
        $result = $conn->query("SELECT LAST_INSERT_ID() AS student_id");
        $student_id = $result->fetch_assoc()['student_id'];

        // Se o aluno for menor de 16 anos, cadastra o responsável
        if ($age < 16) {
            $guardian_name = $_POST['txt-resp-name'];
            $guardian_email = $_POST['em-resp'];
            $guardian_phone = $_POST['numb-resp-nasc'];

            $stmt_guardian = $conn->prepare("CALL pr_InsertGuardians(?, ?, ?, ?)");
            $stmt_guardian->bind_param("isss", $student_id, $guardian_name, $guardian_email, $guardian_phone);
            $stmt_guardian->execute();
            $stmt_guardian->close();
        }

        $stmt_student->close();
        $conn->commit(); // Confirma a transação
        header("Location: login_data.html");
        exit;
    } catch (Exception $e) {
        $conn->rollback(); // Reverte a transação em caso de erro
        echo "Erro ao cadastrar aluno ou responsável: " . $e->getMessage();
    }

    $conn->close();
}
?>
