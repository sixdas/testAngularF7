
    angularjs.controller('testController', ['$scope','$compile', function($scope, $compile) {

    $scope.load = function () {


        debugger

        $$(document).on('pageBeforeAnimation', function(e) {

              // Ajax pages must be compiled first
              $compile(e.target)($scope);
              $scope.$apply();



          });

        $scope.dataUser = {
            name: 'David',
            age : 30,
            color : 'red'
        }

    };
}]);
