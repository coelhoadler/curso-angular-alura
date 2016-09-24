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

    ddo.templateUrl = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';
    return ddo;
});