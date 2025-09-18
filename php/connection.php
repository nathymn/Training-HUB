<?php
//Dados conexão
$servername = "mysql247.umbler.com:41890";
$username = "synergy_school";
$password = "BDSynergy";
$dbname = "synergy_db";

//Cria conexão
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("" . $conn->connect_error);
}
else {
    echo "";
}
?>