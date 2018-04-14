# HackerRank Mega-Red
### Capas de la aplicación:

##### Vista:
```
index.html
style.general.css
```
##### Controlador: 
```
angular.app.js
```

### Responsabilidad de cada función:

##### Responsabilidad de la función "captureData":
```
 ctrl.captureData();
```
Esta función captura los datos que se ingresaron en el TextArea, valida entre otras cosas, el número de casos de prueba,
que el número que conforma la matriz no sea mayor o menor a determinado número, de igual forma el número de comandos a ejecutar.

##### Responsabilidad de la función "processCommand":
```
 ctrl.processCommand();
```

Esta función es llamada por "captureData", donde se obtiene el tipo de comando a ejecutar y los números de las variables que conforman la matriz, previo lanzamos la función que procesa ese comando y enviamos los parametros que generan el resultado en "ctrl.matrix"

##### Responsabilidad de la función "Update":
```
 ctrl.Update();
```

Esta función en base al parametro N y a las variables (x,y,z) y una operación matemática, genera la matriz

##### Responsabilidad de la función "Query":
```
 ctrl.Query();
```
Esta función en base a las coordenadas alamacenadas en el array [ctrl.core] valida [N] en el array [ctrl.matrix]. Las coordenadas las obtiene de acuerdo al indice 
de [N] en el array [ctrl.matriz] como antes se definió en un ciclo "For". 




