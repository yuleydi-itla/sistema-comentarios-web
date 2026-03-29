-- Crear la base de datos
CREATE DATABASE comentarios_db;
GO
 
USE comentarios_db;
GO
 
-- Crear la tabla de comentarios
CREATE TABLE comentarios (
    id      INT IDENTITY(1,1) PRIMARY KEY,
    nombre  NVARCHAR(50)  NOT NULL,
    mensaje NVARCHAR(500) NOT NULL,
    fecha   DATETIME DEFAULT GETDATE()
);
GO
 
