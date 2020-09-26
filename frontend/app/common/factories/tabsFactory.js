(function(){
    angular.module('HPS').factory('tabs', [ TabFactory ])

    function TabFactory(){
        function show(owner, {
            tabList = false,
            tabCreate = false,
            tabUpdate = false,
            tabDelete = false 
        }) {
            owner.tabList = tabList
            owner.tabCreate = tabCreate
            owner.tabUpdate = tabUpdate
            owner.tabDelete = tabDelete
        }
        return { show }
    }
    
})()