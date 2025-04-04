(function () {
    angular.module('HPS').component('paginator', {
        bindings: {
            url: '@',
            pag: '@'
        },
        controller: [
            '$location',
            function ($location) {
                
                this.$onInit = () => {                    
                    const pages = parseInt(this.pag) || 1
                    this.pagesArray = Array(pages).fill(0).map((e, i) => i + 1)                                        
                    
                    this.current = parseInt($location.search().page) || 1
                    this.hasPrev = this.current > 1
                    this.hasNext = this.current < pages
                    this.needPagination = pages > 1
                    
                    this.isCurrent = (i) => {
                        return this.current == i

                    }                    
                    
                }                
            }
        ],
        template: `
        <ul ng-if="$ctrl.needPagination" class="pagination pagination-sm no-margin pull-left">
            <li ng-if="$ctrl.hasPrev">
                <a href="{{ $ctrl.url }}?page={{ $ctrl.current - 1}}">Anterior</a>
            </li>

            <li ng-class="{active: $ctrl.isCurrent(index)}" ng-repeat="index in $ctrl.pagesArray">
                <a href="{{ $ctrl.url}}?page={{ index }}">{{ index }}</a>
            </li>

            <li ng-if="$ctrl.hasNext">
                <a href="{{ $ctrl.url }}?page={{ $ctrl.current + 1}}">Próximo</a>
            </li>
        </ul>
        `
    })


})()