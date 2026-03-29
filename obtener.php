<?php
include 'conexion.php';

$sql  = "SELECT * FROM comentarios ORDER BY fecha DESC";
$stmt = $conexion->query($sql);
$comentarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($comentarios);
?>
