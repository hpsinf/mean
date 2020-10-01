angular.module('HPS').constant('consts', {
    appName: 'HPS App',
    version: '1.0',
    owner: 'Henrique Pinheiro da Silva',
    year: '2020',
    //apiUrl: 'http://localhost:3003/api',
    //oapiUrl: 'http://localhost:3003/oapi',
    apiUrl: 'https://meanhps.herokuapp.com/api',
    oapiUrl: 'https://meanhps.herokuapp.com/oapi',
    userKey: '_hps_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts
}])