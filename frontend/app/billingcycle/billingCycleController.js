(function(){
    angular.module('HPS').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs) {
        const vm = this
        vm.create = function() {
            const url = 'http://localhost:3003/api/billingcycles/'
            $http.post(url, vm.billingCycle).then((res)=>{
                vm.billingCycle = {}
                msgs.addSuccess('Cadastrado com sucesso')             
            }).catch((data)=>{
                msgs.addError(data)
            })
        }
    }
})()