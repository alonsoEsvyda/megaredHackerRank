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
    	console.log(lineas);
    	console.log("lines");
    	/* Validamos que el el array [line] Tenga más de 3 posiciones en su contenido */
    	if(lineas.length < 3){
    		ctrl.showCapture = true;
    		ctrl.messageCapture = "Debes tener por lo menos 1 caso de uso, matriz de incialización y 1 comando ";
    	}else{
    		ctrl.showCapture = false;
    		/* Definimos el número de casos de prueba obteniendo del array [lineas] la posición cero*/
    		let nTst = parseInt(lineas[0]);
    		console.log(nTst);
    		console.log("nTst");
    		/* Validamos que el número de casos de prueba no sea menor a 1 y no sea mayor a 50 */
    		if((nTst < 1) || (nTst > 50)){
        		ctrl.messageCapture= 'Los casos de prueba no esta en el rango permitido (1 < T < 50; T = ' + nTst +').';
    		}else{
    			/* Recorremos el número de casos de prueba que exista en la variable {nTst} */
    			while(nTst--){
    				console.log(nTst);
    				console.log("nTst While");
    				/* Capturamos los argumentos para definir la matriz obteniendo la segunda posición del array [lineas]
    				   creando un array a partir de esa posición */
    				let args = lineas[1].split(' ');
    				/* Validamos que ese array tenga dos psoiciones */
    				if(args.length != 2){
            			ctrl.showCapture = true;
            			ctrl.messageCapture = "La matriz debe tener 2 argumentos";
    				}else{
    					ctrl.showCapture = false;
    					/* Asignamos el valor que compone la matriz a {N} y el número de operaciones a {M} */
    					let N = parseInt(args[0]);
        				let M = parseInt(args[1]);
    				}
    			}
    		}
    	}
    }
    
    $timeout(ctrl.init);

}


