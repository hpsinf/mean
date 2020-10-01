(function () {
    angular.module('HPS').factory('auth', [
        '$http',
        'consts',
        AuthFactory
    ])

    function AuthFactory($http, consts) {
        let user = null

        function getUser() {
            if (!user) {
                user = JSON.parse(localStorage.getItem(consts.userKey))
            }
            return user
        }

        function signup(user, callback) {
            submit('signup', user, callback)
        }

        function login(user, callback) {            
            submit('login', user, callback)
        }
        function submit(url, user, callback) {                       
            $http.post(`${consts.oapiUrl}/${url}`, user)
                .then(resp => {                    
                    localStorage.setItem(consts.userKey, JSON.stringify(resp.data))
                    $http.defaults.headers.common.Authorization = resp.data.token                    
                    if (callback) callback(null, resp.data)
                }).catch((resp) => {                    
                    if (callback) callback(resp.data.errors, null)
                })
        }

        function logout(callback) {
            user = null
            localStorage.removeItem(consts.userKey)
            $http.defaults.headers.common.Authorization = ''
            if (callback) callback(null)
        }

        function validate(token, callback) {            
            if (token) {
                $http.post(`${consts.oapiUrl}/validate`, { token })
                    .then(resp => {                        
                        if (resp.data.valid) {                            
                            $http.defaults.headers.common.Authorization = getUser().token
                        } else logout()
                        if (callback) callback(null, resp.data.valid)
                    }).catch((resp) => {                        
                        if (callback) callback(resp.data.error)
                    })
            } else {
                if (callback) callback('Sem permissão de acesso, permiss]ap expirada')
            }
        }        

        return { signup, login, logout, getUser , validate }
    }

})()