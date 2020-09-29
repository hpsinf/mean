(function(){
    angular.module('HPS').config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('dashboard', {
                url: "/dashboard",
                templateUrl: "dashboard/dashboard.html"
            }).state('billingcycle', {
                url: "/billingcycles?page",
                templateUrl: "billingcycle/tabs.html"
            })
    
            $urlRouterProvider.otherwise('/dashboard')
        }
    ])
})()
