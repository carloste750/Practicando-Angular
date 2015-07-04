var module = angular.module("app", []);

module.controller("Controlador", function($scope){
    $scope.showinfo=false;
    $scope.showbtninfo=true;
    $scope.showbtnclose=false;

	$scope.show_socclave=function(){
		$scope.mensaje="¿Quienes son Nuestros socios clave?\n¿Quienes son Nuestros Suministradores clave?\n¿Quienes Recursos clave vamos a adquirir y quienes somos?\n¿Que actividades clave realizan los socios?";
	    window.alert($scope.mensaje);
	}
                
});

