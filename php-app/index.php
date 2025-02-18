<?php
$uri = strtok($_SERVER['REQUEST_URI'], '?'); // Eliminar parámetros GET

if ($uri === "/" || $uri === "/index.php" || $uri === "/api") {
    echo "Hola desde PHP en Podman!";
} else {
    echo "Ruta no válida. REQUEST_URI recibido: " . $uri;
}
?>