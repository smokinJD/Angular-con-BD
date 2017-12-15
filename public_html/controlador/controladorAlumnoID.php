<?php
require_once("../modelo/conectar.php");
require_once("../modelo/alumnos_model.php");
$id = $_GET["value"];
$listado = new alumnos_model();
$datos = $listado->get_alumnosID($id);

$alumnos= json_encode($datos); 
print $alumnos;