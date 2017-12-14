<?php
require_once("../modelo/conectar.php");
require_once("../modelo/alumnos_model.php");
$data = json_decode(file_get_contents('php://input'), true);

$nombre = $data["nombre"];
$apellido1 = $data["apellido1"];
$apellido2 = $data["apellido2"];
$ciclo = $data["ciclo"];
$curso = $data["curso"];
$listado = new alumnos_model();
$datos = $listado->insertar_alumno($nombre, $apellido1, $apellido2, $ciclo, $curso);

print $nombre;