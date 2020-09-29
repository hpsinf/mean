(function () {
    angular.module('HPS').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
            model: '=',
            readonly: '<'
                        
        }, controller: [
            'gridSystem',
            function (gridSystem) {
                //metodo de ciclo de vida do controller, chama on init depois que os bindings estiverem inicializados
                this.$onInit = () => {
                    this.gridClasses = gridSystem.toCssClasses(this.grid)
                }
            }
        ],
        template:`
        <div class="{{ $ctrl.gridClasses }}">
        <div class="form-group">
            <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
            <input id="{{ $ctrl.id }}" class="form-crontrol" placeholder="{{ $ctrl.placeholder }}" 
            ng-model="$ctrl.model" type="{{ $ctrl.type }}" ng-readonly="$ctrl.readonly" />
        </div>
        </div>
        `
    })
})()