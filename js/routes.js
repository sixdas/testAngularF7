var routes = [{
        path: '/home/',
        url: 'index.html',
        options: {
            transition: 'f7-dive',
        },
        on: {
            pageBeforeIn: function (e, page) {
                // do something before page gets into the view

            },
            pageAfterIn: function (event, page) {
                // do something after page gets into the view
            },
            pageInit: function (event, page) {
                // do something when page initialized

            },
            pageBeforeRemove: function (event, page) {
                // do something before page gets removed from DOM
            },
        }
    },
    {

        path: '/testPage/',
        url: './pages/testPage/testPage.html',
        options: {
            domCache: true
        },
        on: {
            pageBeforeIn: function (e, page) {


            },
            pageAfterIn: function (event, page) {
                // do something after page gets into the view
            },
            pageInit: function (event, page) {
                // do something when page initialized
                $$(document).on('pageBeforeAnimation', function (e) {
                    debugger


                    // Ajax pages must be compiled first
                    $compile(e.target)($scope);
                    $scope.$apply();



                });

            },
            pageBeforeRemove: function (event, page) {
                // do something before page gets removed from DOM
            },
        }
    },
    {
        path: '(.*)',
        url: './pages/404.html',
    }
];