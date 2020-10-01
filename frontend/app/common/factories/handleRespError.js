(function(){
    angular.module('HPS').factory('handleRespError', [
        '$q',
        '$window',
        'consts',
        HandleRespErrorFactory
    ])

    function HandleRespErrorFactory ($q, $window, consts) {
        function respError(errorResp) {            
            if (errorResp.data.status === 403) {
                localStorage.removeItem(consts.userKey)
                $window.location.href = '/auth.html'
            }
            return $q.reject(errorResp)
        }

        return { respError }
    }
})()