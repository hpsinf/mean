(function(){
    angular.module('HPS').factory('msgs', [
        'toastr',
        MsgFactory
    ])

    function MsgFactory(toastr){
        function addMsg(msgs, title, method) {
            if (msgs instanceof Array) {
                msgs.forEach(msg => toastr[method](msg, title))
            } else {
                toastr[method](msgs, title)
            }
        }
        function addSuccess(msgs) {
            addMsg(msgs, 'Sucesso', 'success')
        }
    
        function addError(msgs) {
            addMsg(msgs, 'Erro', 'error')
        }
        
        return { addSuccess, addError }
    }
    
    

})()