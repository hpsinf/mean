(function(){
    angular.module('HPS').controller('AuthCtrl', [
        '$location',
        'msgs',
        'auth',
        AuthController
    ])

    function AuthController($location, msgs, auth) {
        const vm = this

        vm.loginMode = true

        vm.changeMode = () => vm.loginMode = !vm.loginMode

        vm.getUser = () => auth.getUser()
        
        vm.signup = () => {
            auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('/'))
        }

        vm.login = () => {                 
            auth.login(vm.user, err => err ? msgs.addError(err) : $location.path('/'))            
        }

        vm.logout = () => {
            auth.logout(() => $location.path('/auth.html'))            
        }

    }
})()