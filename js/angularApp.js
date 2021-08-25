angular.module("myApp", []).controller('testController', function($scope, $compile) {
    console.log('inside');
    $$(document).on('page:init', function(e, page) {
          // Ajax pages must be compiled first
        if (page.name === 'testPage') {
            $compile(e.target)($scope);
            $scope.$apply();
        }
    });

    $scope.dataUser = {
        name: 'David',
        age : 30,
        color : 'red'
    }
});
