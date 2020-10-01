(function () {
    angular.module('HPS').component('authField', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            icon: '@',
            placeholder: '@',
            type: '@',
            model: '=',
            hide: '<'

        }, controller: [
            function () {
                //metodo de ciclo de vida do controller, chama on init depois que os bindings estiverem inicializados
                this.$onInit = () => {
                    this.iconClasses = `glyphicon glyphicon-${this.icon} from-control-feedback`
                }
            }
        ],
        template: `        
        <div class="form-group has-feedback">            
            <input ng-model="$ctrl.model" id="{{ $ctrl.id }}" autofocus class="form-crontrol" placeholder="{{ $ctrl.placeholder }}" 
             type="{{ $ctrl.type }}" ng-hide="$ctrl.hide" />
             <span class="{{ $ctrl.iconClasses }}"></span>
        </div>        
        `
    })
})()