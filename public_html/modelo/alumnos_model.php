<?php
class alumnos_model{
    private $db;
    private $alumnos;
 
    public function __construct(){
        $this->alumnos = array();
        $this->db = conectar::conexion();
    }
    
   public function get_alumnos(){
        $sql="SELECT * FROM `Alumno`";
        foreach ($this->db->query($sql) as $res){
            $this->alumnos[]=$res;
        }
        return $this->alumnos;
        $this->db=null;
    } 
    
    public function insertar_alumno($nombre, $apellido1, $apellido2, $ciclo, $curso){
        $sql="INSERT INTO `alumno`(`nombre`, `apellido1`, `apellido2`, `ciclo`, `curso`) VALUES ('$nombre', '$apellido1', '$apellido2', '$ciclo', '$curso');";
        $this->db->query($sql);
    }
}

