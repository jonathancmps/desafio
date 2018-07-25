angular.module('facilit')
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: 'modules/facilit/views/home.html',
            controller: "HomeController as vm"
        })
    })