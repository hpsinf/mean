(function () {
    angular.module('HPS').controller('DashboardCtrl', [
        '$http',
        'auth',
        DashboardController
    ])

    function DashboardController($http, auth) {
        const vm = this
        vm.getSummary = () => {
            const url = 'http://localhost:3003/api/billingSummary'
            $http.get(url).then((resp) => {
                const { credit = 0, debt = 0 } = resp.data
                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt
            }).catch((resp) =>{
                if (resp.data.status = '403') {
                    auth.logout()
                }
            })
        }
        vm.getSummary()
    }
})()