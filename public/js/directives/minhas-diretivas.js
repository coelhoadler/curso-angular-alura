angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

    var ddo = {};
    ddo.restrict = "AE"; // Atributte and Element
    ddo.transclude = true;

    ddo.scope = {
        titulo : '@titulo'
    }

    ddo.templateUrl = "js/directives/meu-painel.html";
    return ddo;

})
.directive('umaFoto', function() {

    var ddo = {};
    ddo.restrict = "AE";
    ddo.scope = {
        url : '@url',
        titulo : '@titulo'
    }

    ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';
    return ddo;
})
.directive('meuBotaoPerigo', function() {
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
        nome: '@',
        acao : '&'
    }
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
    return ddo;
})
.directive('meuFocus', function() {
    var ddo = {};

    ddo.restrict = "A";
    // ddo.scope = {
    //     focado : '='
    // }

    ddo.link = function($scope, element) {
        $scope.on('fotoCadastrada', function() {
            element[0].focus();
        })
        // $scope.$watch('focado', function() {
        //     if ($scope.focado) {
        //         element[0].focus();
        //     }
        //     $scope.focado = false;
        // });
    }

    return ddo;
});