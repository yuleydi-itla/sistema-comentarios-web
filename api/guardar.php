<?php
include 'conexion.php';

$nombre  = $_POST['nombre']  ?? '';
$mensaje = $_POST['mensaje'] ?? '';

$sql  = "INSERT INTO comentarios (nombre, mensaje) VALUES (:nombre, :mensaje)";
$stmt = $conexion->prepare($sql);
$stmt->bindParam(':nombre',  $nombre);
$stmt->bindParam(':mensaje', $mensaje);
$stmt->execute();

echo "¡Comentario guardado con éxito!";
?>
