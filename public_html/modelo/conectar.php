<?php
class Conectar{
    public static function conexion(){
        $localhost = 'localhost';
        $usuario = 'root';
        $contrasena = '';
        $bbdd = 'fp';
        try{
            $link = mysqli_connect($localhost, $usuario, $contrasena, $bbdd);
            $link->query("SET NAMES 'utf8'");
        } catch (Exception $ex) {
            die ("error". $ex->getMessage());
            echo "Linea de error" . $ex->getLine();
        }
        return $link;
    }
}
?>
