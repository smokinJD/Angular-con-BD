<?php
require_once("../modelo/conectar.php");
require_once("../modelo/alumnos_model.php");
$listado = new alumnos_model();
$datos = $listado->get_alumnos();

$alumnos= json_encode($datos); 
print $alumnos;