angular.module('alurapic')
.controller('FotoController', function($scope, cadastroDeFoto, recursoFoto, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) {
        recursoFoto.get({fotoId : $routeParams.fotoId},
        function(foto) {
            $scope.foto = foto;
        }, function(error) {
            console.log(error)
        });
    }

    $scope.save = () => {
        if ($scope.formulario.$valid) {
            cadastroDeFoto.cadastrar($scope.foto)
            .then(function(retorno) {
                $scope.mensagem = retorno.mensagem;
                if (retorno.inclusao) {
                    $scope.foto = {};
                }
                $scope.$broadcast('fotoCadastrada');
            })
            .catch(function(error) {
                $scope.mensagem = error.mensagem;
            });
        }
    }

});