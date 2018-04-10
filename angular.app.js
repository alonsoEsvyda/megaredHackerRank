var app = angular
            .module("hackerRankApp", [])
            .controller("hackerRankController", hackerRankController);

hackerRankController.$inject = ["$scope", "$http","$timeout"];

function hackerRankController($scope,$http,$timeout){

    var ctrl = this;
    ctrl.capture = "";
    ctrl.showCapture = false;

    ctrl.init = function() {
    };

    ctrl.captureData = function(){
        console.log(ctrl.capture);
        ctrl.showCapture = true;
    }
    
    $timeout(ctrl.init);

}


