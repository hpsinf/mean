angular.module('HPS').component('valueBox', {
    bindings: {
        grid: '@',
        colorClass: '@',
        value: '@',
        text: '@',
        iconClass: '@'
    },
    controller: [
        'gridSystem',
        function (gridSystem) {
            //metodo de ciclo de vida do controller, chama on init depois que os bindings estiverem inicializados
            this.$onInit = function () {
                this.gridClasses = gridSystem.toCssClasses(this.grid)                
            }            
        }
    ],
    template: `
    <div class="{{ $ctrl.gridClasses }}">
        <div class="small-box {{ $ctrl.colorClass }}">
            <div class="inner">
                <h3>{{ $ctrl.value }}</h3>
                <p>{{ $ctrl.text }}</p>
            </div>
            <div class="icon">
                <i class="{{ $ctrl.iconClass }}"></i>
            </div>
        </div>
    </div>
    `
})