<?php
require_once 'conexion.php';

header('Content-Type: application/json');

try {
    // Select con orden descendente por fecha (Misión 2)
    $stmt = $pdo->query("SELECT * FROM comentarios ORDER BY fecha DESC");
    $comentarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    http_response_code(200);
    echo json_encode($comentarios);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Error al obtener comentarios: " . $e->getMessage()]);
}
?>
