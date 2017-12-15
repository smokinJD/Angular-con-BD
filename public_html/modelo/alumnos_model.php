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
    
     public function get_alumnosID($id){
        $sql="SELECT * FROM `Alumno` WHERE id=$id";
        foreach ($this->db->query($sql) as $res){
            $this->alumnos=$res;
        }
        return $this->alumnos;
        $this->db=null;
    } 
    
    public function insertar_alumno($nombre, $apellido1, $apellido2, $ciclo, $curso){
        $sql="INSERT INTO `alumno`(`nombre`, `apellido1`, `apellido2`, `ciclo`, `curso`) VALUES ('$nombre', '$apellido1', '$apellido2', '$ciclo', '$curso');";
        $this->db->query($sql);
    }
    
    public function eliminarAlumno($id){
        $sql="DELETE FROM `alumno` WHERE id=$id;";
        $this->db->query($sql);
    }
    
    public function modificar_alumno($nombre, $apellido1, $apellido2, $ciclo, $curso, $id){
        $sql="UPDATE `Alumno` SET `nombre`='$nombre',`apellido1`='$apellido1',`apellido2`='$apellido2',`ciclo`='$ciclo',`curso`='$curso' WHERE id=$id;";
        $this->db->query($sql);
    }
}

