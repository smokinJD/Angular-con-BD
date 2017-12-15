var miAplicacion = angular.module('miAplicacion', []);

miAplicacion.controller('mainController', function($scope, $http){
    $http.get("controlador/controladorAlumno.php").then(function(response){
            $scope.lista = response.data;
        
        $scope.param = [ ];
        
        $scope.misdatos ={
            id:"",
            nombre:"",
            apellido1:"",
            apellido2:"",
            ciclo:"",
            curso:""
        };
        //////CALCULAR NUEVO ID//////
        $scope.ultimoId = $scope.lista[parseInt($scope.lista.length)-1].id;
        $scope.misdatos.id = parseInt($scope.ultimoId)+1;
        
        $scope.verAgregaralumno = 'false';
        $scope.verModificaralumno = 'false';
        $scope.verMenu = 'true';
        
        ///////////////////////////////
        //////////////////////////////
        $scope.Iniciaragregar = function(){
            $scope.verAgregaralumno = 'true';
            $scope.verMenu = 'false';
        };
        
        $scope.agregar = function() {
          alert ($scope.misdatos.nombre);
          $scope.lista.push({id:$scope.misdatos.id,nombre:$scope.misdatos.nombre,
          apellido1:$scope.misdatos.apellido1,apellido2:$scope.misdatos.apellido2,
          ciclo:$scope.misdatos.ciclo,curso:$scope.misdatos.curso});
      
          $http.post("controlador/controladorInsertarAlumno.php", {nombre:$scope.misdatos.nombre,
          apellido1:$scope.misdatos.apellido1,apellido2:$scope.misdatos.apellido2,
          ciclo:$scope.misdatos.ciclo,curso:$scope.misdatos.curso}).success(function(data) {
                        $scope.param = eval(data);
                        console.log(data);
                    })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
      
      
            $scope.misdatos.id++;
            $scope.misdatos.nombre='';
            $scope.misdatos.apellido1='';
            $scope.misdatos.apellido2='';
            $scope.misdatos.ciclo='';
            $scope.misdatos.curso='';
            $scope.verAgregaralumno = 'false';
            $scope.verMenu = 'true';
        };
        
        //Modificar
        
        $scope.IniciarModificar = function(id){
            $scope.verAgregaralumno = 'false';
            $scope.verModificaralumno = 'true';
            $scope.verMenu = 'false';
            
            $http({url:"controlador/controladorAlumnoID.php", method: "GET", params: {value:id}}).then(function(response){
                //alert(JSON.stringify(response.data));
                
                $scope.misdatos.id = id;
                $scope.misdatos.nombre= response.data.nombre;
                $scope.misdatos.apellido1= response.data.apellido1;
                $scope.misdatos.apellido2= response.data.apellido2;
                $scope.misdatos.ciclo= response.data.ciclo;
                $scope.misdatos.curso= response.data.curso;
            });
        };
        
        $scope.modificar = function() {
          alert ($scope.misdatos.nombre);
          $scope.lista.push({id:$scope.misdatos.id,nombre:$scope.misdatos.nombre,
          apellido1:$scope.misdatos.apellido1,apellido2:$scope.misdatos.apellido2,
          ciclo:$scope.misdatos.ciclo,curso:$scope.misdatos.curso});
      
          $http.post("controlador/controladorModificarAlumno.php", {id:$scope.misdatos.id,nombre:$scope.misdatos.nombre,
          apellido1:$scope.misdatos.apellido1,apellido2:$scope.misdatos.apellido2,
          ciclo:$scope.misdatos.ciclo,curso:$scope.misdatos.curso}).success(function(data) {
                        $scope.param = eval(data);
                        console.log(data);
                    })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
      
      
            $scope.misdatos.id++;
            $scope.misdatos.nombre='';
            $scope.misdatos.apellido1='';
            $scope.misdatos.apellido2='';
            $scope.misdatos.ciclo='';
            $scope.misdatos.curso='';
            $scope.verAgregaralumno = 'false';
            $scope.verModificaralumno = 'false';
            $scope.verMenu = 'true';
        };
        
        $scope.cancelar = function () {
            alert($scope.misdatos.id);
            $scope.misdatos.id=$scope.misdatos.id;
            $scope.misdatos.nombre='';
            $scope.misdatos.apellido1='';
            $scope.misdatos.apellido2='';
            $scope.misdatos.ciclo='';
            $scope.misdatos.curso='';
            $scope.verAgregaralumno='false';
            $scope.verMenu='true';
        };
        
        $scope.Eliminarlista=function(){
            $scope.lista=[];
        };
        
        $scope.Eliminaralumno=function(id){
            
            if (confirm('¿Seguro que quieres borrar el alumno con id: ' + id + '?')) {
           $http({url: "controlador/controladorEliminarAlumno.php",
                method: "GET",
                params: {value:id}
            }).then(successCallback, errorCallback);

              function successCallback(response){
                alert("Borrado " + id);
                
                var milista = $scope.lista;
                $scope.lista=[];
                angular.forEach(milista, function(item){
                    if(item.id != id){
                        $scope.lista.push(item);
                    }
                });
                $scope.ultimoId = $scope.lista[parseInt($scope.lista.length)-1].id;
                $scope.misdatos.id = parseInt($scope.ultimoId)+1;
                
              }
              function errorCallback(error){
                console.error('Error occurred:', response.status, response.data);
              }
            
            }
        };
        
        $scope.cambiar = function(){
            for(i=0;i<$scope.lista.length;i++){
                if($scope.lista[i].id===$scope.misdatos.id){
                    $scope.lista[i].nombre=$scope.misdatos.nombre;
                }
            }
        };
        
        //Codigo de busqueda, se busca por cualquiera de las carac. primero se le da al boton
        //iniciar busqueda para ver los campos de busqueda y luego se filtra
        $scope.verFormBusqueda =false;
        
        $scope.Buscar = function () {
            $scope.verFormBusqueda = true;
        };
        
        $scope.finbuscar = function () {
            $scope.TEXTObusqueda = "";
            $scope.verFormBusqueda = false;
        };
    });
});


