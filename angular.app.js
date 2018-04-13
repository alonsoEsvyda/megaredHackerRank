var app = angular
            .module("hackerRankApp", [])
            .controller("hackerRankController", hackerRankController);

hackerRankController.$inject = ["$scope", "$http","$timeout"];

function hackerRankController($scope,$http,$timeout){

    var ctrl = this;
    ctrl.capture = "";
    ctrl.showCapture = false;
    ctrl.messageCapture = "";
    ctrl.matriz = [];

    ctrl.init = function() {
    };

    ctrl.captureData = function(){
    	let lines = ctrl.capture.split('\n');
    	console.log(lines);
    	console.log("lines");
    	/* Validamos que el el array [line] Tenga más de 3 posiciones en su contenido */
    	if(lines.length < 3){
    		ctrl.showCapture = true;
    		ctrl.messageCapture = "Debes tener por lo menos 1 caso de uso, matriz de incialización y 1 comando ";
    	}else{
    		ctrl.showCapture = false;
    		/* Definimos el número de casos de prueba obteniendo del array [lines] la posición cero*/
            var positionLine = 0;
    		var T = parseInt(lines[positionLine++]);
    		console.log(T);
    		console.log("T");
    		/* Validamos que el número de casos de prueba no sea menor a 1 y no sea mayor a 50 */
    		if((T < 1) || (T > 50)){
        		ctrl.messageCapture= 'Los casos de prueba no esta en el rango permitido (1 < T < 50; T = ' + T +').';
    		}else{
    			/* Recorremos el número de casos de prueba que exista en la variable {T} */
    			while(T--){
    				console.log(T);
    				console.log("T While");
    				/* Capturamos los argumentos para definir la matriz obteniendo la segunda posición del array [lines]
    				   creando un array a partir de esa posición */
    				var args = lines[positionLine++].split(' ');
    				/* Validamos que ese array tenga dos psoiciones */
    				if(args.length != 2){
            			ctrl.showCapture = true;
            			ctrl.messageCapture = "La matriz debe tener 2 argumentos, 1  que defina la matriz y otro que defina el número de operaciones";
    				}else{
    					ctrl.showCapture = false;
    					/* Asignamos el valor que compone la matriz a {N} y el número de operaciones a {M} */
    					var N = parseInt(args[0]);
        				var M = parseInt(args[1]);

                        /* Validamos que el número que conforma la matriz no sea menor a 1 ni mayor a 100 */
                        if((N < 1) || (N > 100)){
                            ctrl.showCapture = true;
                            ctrl.messageCapture = 'El número de la matriz, está fuera de rango, debe ser mayor a 1 y menor que 100';
                        }else{
                            ctrl.showCapture = false;
                            /* Validamos que el número de comandos no sea menor a 1, ni mayor a 1000 */
                            if((M < 1) || (M > 1000)){
                                ctrl.showCapture = true;
                                ctrl.messageCapture = 'El número de caso de prueba no de ser menor a 1 y menor 1000';
                            }else{
                                ctrl.showCapture = false;
                                /* Recorremos el número de comandos que se indicó, en un bucle */
                                while(M--) {
                                    var command = lines[positionLine++];
                                    /* Aquí empezamos a ejecutar comandos dependiendo del comando que se halla elegido */
                                    ctrl.processCommand(command, N);
                                }
                            }
                        }
    				}
    			}
    		}
    	}
    }

    ctrl.processCommand = function(command, N){
        /* Creamos un array con la linea en la que se ejecuta el comando */
        var args = command.split(' ');

        /* Obtenemos de la posición cero el tipo de comando a ejecutar */
        if(args[0] == "UPDATE"){
            ctrl.showCapture = false;
            /* Realizamos el Update de la Matriz */
            ctrl.Update(parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), parseInt(args[4]), N);
        }else if(args[0] == "QUERY"){
            ctrl.showCapture = false;
            /* Realizamos el Query de la Matriz */
            ctrl.Query(parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), parseInt(args[4]), parseInt(args[5]), parseInt(args[6]), N);
        }else{
            ctrl.showCapture = true;
            ctrl.messageCapture = 'El tipo de comando a ejecutar debe ser QUERY o UPDATE';
        }
    }
    
    ctrl.Update = function(x,y,z,W, N){
        if(x < 1 || x > N ||
           y < 1 || y > N ||
           z < 1 || z > N){
            ctrl.showCapture = true;
            ctrl.messageCapture = 'Los valores de la matriz están fuera de rango ya que x,y,z > 1 y x,y,z < N';
        }else{
            
        }
    }

    ctrl.Query = function(x1,y1,z1,x2,y2,z2,N){

    }

    $timeout(ctrl.init);
}


