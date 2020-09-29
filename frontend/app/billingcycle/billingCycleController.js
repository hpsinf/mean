(function () {
    angular.module('HPS').controller('BillingCycleCtrl', [
        '$http',
        '$location',
        'msgs',
        'tabs',
        BillingCycleController
    ])


    function BillingCycleController($http, $location, msgs, tabs) {
        const vm = this
        const url = 'https://meanhps.herokuapp.com/api/billingcycles'            

        vm.refresh = () => {
            const page = parseInt($location.search().page) || 1            
            $http.get(`${url}?skip=${(page - 1) * 8}&limit=8`).then((resp) => {
                vm.billingCycle = {credits: [{}], debts: [{}]}
                vm.billingCycles = resp.data  
                vm.calculateValues()                              
                
                $http.get(`${url}/count`).then((resp) => {
                    vm.pages = Math.ceil(resp.data.value / 8)                               
                    tabs.show(vm, { tabList: true, tabCreate: true })    
                })            
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
            vm.calculateValues()
            tabs.show(vm, { tabUpdate: true })
        }

        vm.showTabDelete = (billingCycle) => {
            vm.billingCycle = billingCycle
            vm.calculateValues()
            tabs.show(vm, { tabDelete: true })
        }

        vm.update = () => {
            const urlBillingCycle_id = `${url}/${vm.billingCycle._id}`    
            $http.put(urlBillingCycle_id, vm.billingCycle).then((resp) => {
                vm.refresh()
                if (resp.status = 200)
                    msgs.addSuccess('Operação efetuda com sucesso')                
            }).catch((data) => {
                msgs.addError(data.data.errors)
            })
        }

        vm.delete = () => {
            var urlBillingCycle_id = `${url}/${vm.billingCycle._id}`    
            $http.delete(urlBillingCycle_id, vm.billingCycle).then((resp) => {
                vm.refresh()
                if (resp.status = 200)
                    msgs.addSuccess('Operação efetuda com sucesso')
            }).catch((data) => {
                msgs.addError(data.data.errors)
            })
        }
        vm.addCredit = (indice) => {
            vm.billingCycle.credits.splice(indice + 1, 0, {})
        }
        
        vm.cloneCredit = (indice, {name, value}) => {
            vm.billingCycle.credits.splice(indice + 1, 0, {name, value})
            vm.calculateValues()                              
        }

        vm.deleteCredit = (indice) => {
            if (vm.billingCycle.credits.length > 1) {
                vm.billingCycle.credits.splice(indice, 1)
                vm.calculateValues()                              
            }
            
        }

        vm.addDebt = (indice) => {
            vm.billingCycle.debts.splice(indice + 1, 0, {})
        }
        
        vm.cloneDebt = (indice, {name, value, status}) => {
            vm.billingCycle.debts.splice(indice + 1, 0, {name, value, status})
            vm.calculateValues()
        }

        vm.deleteDebt = (indice) => {
            if (vm.billingCycle.debts.length > 1){
                vm.billingCycle.debts.splice(indice, 1)
                vm.calculateValues()
            }
            
        }
        
        vm.calculateValues = () => {
            vm.credit = 0
            vm.debt = 0    
            if (vm.billingCycle) {
                vm.billingCycle.credits.forEach(({value}) => {
                    vm.credit += !value || isNaN(value) ? 0 : parseFloat(value)                    
                })

                vm.billingCycle.debts.forEach(({value}) => {
                    vm.debt += !value || isNaN(value) ? 0 : parseFloat(value)                    
                })
            }
            vm.total = vm.credit - vm.debt
        }
        vm.refresh()
    }
})()