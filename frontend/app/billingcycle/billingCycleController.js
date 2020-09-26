(function () {
    angular.module('HPS').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])


    function BillingCycleController($http, msgs, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingcycles'

        vm.refresh = () => {
            $http.get(url).then((resp) => {
                vm.billingCycle = {}
                vm.billingCycles = resp.data
                tabs.show(vm, { tabList: true, tabCreate: true })
                //console.log('Refresh')
            })
        }

        vm.create = function () {
            $http.post(url, vm.billingCycle).then((resp) => {
                vm.refresh()
                msgs.addSuccess('Operação efetuda com sucesso')
            }).catch((msgsErro) => {
                msgs.addError(msgsErro.data.errors)
            })
        }

        vm.showTabUpdate = (billingCycle) => {
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabUpdate: true })
        }

        vm.showTabDelete = (billingCycle) => {
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabDelete: true })
        }

        vm.update = () => {
            const  putUrl = `${url}/${vm.billingCycle._id}`
            $http.put(putUrl, vm.billingCycle).then((resp)=>{                
                vm.refresh()
                //if (resp.status = 200)
                msgs.addSuccess('Operação efetuda com sucesso')               
                //console.log(resp) 
            }).catch((data) => {
                msgs.addError(data.data.errors)
            })
        }

        vm.delete = () => {
            const  deleteUrl = `${url}/${vm.billingCycle._id}`
            $http.delete(deleteUrl, vm.billingCycle).then((resp)=>{                
                vm.refresh()
                msgs.addSuccess('Operação efetuda com sucesso')                
            }).catch((data) => {
                msgs.addError(data.data.errors)
            })
        }
        vm.refresh()
    }
})()