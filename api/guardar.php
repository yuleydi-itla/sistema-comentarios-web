<?php
require_once 'conexion.php';

header('Content-Type: application/json');

// recibir json
$input = json_decode(file_get_contents('php://input'), true);
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : ($input['nombre'] ?? '');
$comentario = isset($_POST['comentario']) ? $_POST['comentario'] : ($input['comentario'] ?? '');

$nombre = trim($nombre);
$comentario = trim($comentario);

if (empty($nombre) || empty($comentario)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Nombre y comentario son obligatorios."]);
    exit;
}

try {
    //prepared statements
    $stmt = $pdo->prepare("INSERT INTO comentarios (nombre, comentario) VALUES (:nombre, :comentario)");
    $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
    $stmt->bindParam(':comentario', $comentario, PDO::PARAM_STR);
    
    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(["status" => "success", "message" => "Comentario guardado exitosamente."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "No se pudo guardar el comentario."]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Error de base de datos: " . $e->getMessage()]);
}
?>
