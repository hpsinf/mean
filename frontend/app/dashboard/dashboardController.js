(function(){
    angular.module('HPS').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ])
    
    function DashboardController($http) {
        const vm = this
        vm.getSummary = function () {
            const url = 'https://meanhps.herokuapp.com/api/billingSummary'
            $http.get(url).then((resp) => {
                const {credit = 0, debt = 0} = resp.data
                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt
            })
        }
        vm.getSummary()
    }
})()