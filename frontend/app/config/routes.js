(function () {
    angular.module('HPS').config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider.state('dashboard', {
                url: "/dashboard",
                templateUrl: "dashboard/dashboard.html"
            }).state('billingcycle', {
                url: "/billingcycles?page",
                templateUrl: "billingcycle/tabs.html"
            })
            $httpProvider.interceptors.push('handleRespError')
        }]).run([
            '$rootScope',
            '$http',
            '$location',
            '$window',
            'auth',
            function ($rootScope, $http, $location, $window, auth) {
                if (!$window.location.href.includes('/auth.html'))
                    validateUser()
                $rootScope.$on('$locationChangeStart', () => validateUser())

                function validateUser() {                         
                    const user = auth.getUser()
                    const authPage = '/auth.html'
                    const isAuthPage = $window.location.href.includes(authPage)
                                        
                    if (!user && !isAuthPage) {                      
                        $window.location.href = authPage
                    } else if (user && !user.isValid) {                          
                        auth.validate(user.token, (err, valid) => {                                        
                            if (!valid) {                                
                                auth.logout()
                                $window.location.href = authPage
                            } else {                                
                                user.isValid = true
                                $http.defaults.headers.common.Authorization = user.token
                                isAuthPage ? $window.location.href = '/' : $location.path('/dashboard')
                            }
                        })
                    }
                }

            }
        ])
})()
