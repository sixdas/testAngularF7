// Initialize your app
var $$ = Dom7;
var angularjs = angular.module("myApp", []);
var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'AppTest',
    // App id
    id: 'com.myapp.test',
    theme: 'md',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: routes,
});

var mainView = app.views.create('.view-main', {
    on: {
        pageInit: function () {


            if (settings.isDebug == 0) {
                console.log = function () {};
            }

        }
    }
});


