<?php
require_once("../modelo/conectar.php");
require_once("../modelo/alumnos_model.php");

$id = $_GET["value"];

$listado = new alumnos_model();
$datos = $listado->eliminarAlumno($id);

print $nombre;