var app = angular
            .module("hackerRankApp", [])
            .controller("hackerRankController", hackerRankController);

hackerRankController.$inject = ["$scope", "$http","$timeout"];

function hackerRankController($scope,$http,$timeout){

    var ctrl = this;
    ctrl.capture = "";
    ctrl.showCapture = false;
    ctrl.messageCapture = "";

    ctrl.init = function() {
    };

    ctrl.captureData = function(){
    	let lineas = ctrl.capture.split('\n');
    	/* Validamos que el el array [line]
    	   Tenga más de 3 posiciones en su contenido */
    	if(lineas.length < 3){
    		ctrl.showCapture = true;
    		ctrl.messageCapture = "Debes tener por lo menos 1 caso de uso, matriz de incialización y 1 comando ";
    	}else{
    		ctrl.showCapture = false;
    		/* Definimos el valor inicial para
    		   capturar el valor del array [lineas]
    		   antes de incrementarlo */
    		let position = 0;
    		/* Definimos el número de casos de prueba
    		   obteniendo del array [lineas] la
    		   posición cero y luego incrementando en 1 */
    		let nTst = parseInt(lineas[position++]);
    		/* Validamos que el número de casos
    		   de prueba no sea menor o igual a 1
    		   y no sea mayor o igual a 50 */
    		if((nTst <= 1) || (nTst >= 50)){
        		ctrl.messageCapture= 'Los casos de prueba no esta en el rango permitido (1 <= T <= 50; T = ' + nTst +').';
    		}
    	}
    }
    
    $timeout(ctrl.init);

}


