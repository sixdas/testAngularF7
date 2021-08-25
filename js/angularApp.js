var app = angular.module("myApp", []);
app.controller('testController', function($scope, $compile) {

    $$(document).on('page:init', function(e, page) {
          // Ajax pages must be compiled first
        if (page.name === 'testPage') {
            $compile(e.target)($scope);
            $scope.$apply();
            console.log('compiled test page');
        }
        if (page.name === 'aboutPage') {
            $compile(e.target)($scope);
            $scope.$apply();
            console.log('compiled about page');
        }
    });

    $scope.dataUser = {
        name: 'David',
        age : 30,
        color : 'red'
    }
});
