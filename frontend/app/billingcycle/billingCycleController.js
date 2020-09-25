(function(){
    angular.module('HPS').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ])

    
    function BillingCycleController($http, msgs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingcycles/'
        
        vm.refresh = ()=>{
            $http.get(url).then((resp)=>{
                vm.billingCycle = {}
                vm.billingCycles = resp.data            
            })
        }

        vm.create = function() {
            $http.post(url, vm.billingCycle).then((resp)=>{
                vm.refresh()
                msgs.addSuccess('Operação efetuda com sucesso')             
            }).catch((data)=>{
                msgs.addError(data.data.errors)
            })
        }
        
        vm.refresh()
    }
})()