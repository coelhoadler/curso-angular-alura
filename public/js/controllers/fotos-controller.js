angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

    $scope.filtro = '';
    $scope.mensagem = '';
    
    let url = "v1/fotos";
    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    },
    function(error) {
        throw new Error(error);
    });

    // $http.get(url)
    // .then(function(response) {
    //     console.log(response);
    //     if (response.status == 200) {
    //         $scope.fotos = response.data;
    //     }
    // })
    // .catch(function(error) {
    //     throw new Error(error);
    // });

    $scope.remover = (foto) => {
        if (foto) {
            recursoFoto.delete({fotoId : foto._id},
            function() {
                var iFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(iFoto, 1);
                $scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso.";
            },
            function() {
                $scope.mensagem = "Não foi possível remover a foto "+ foto.titulo + ".";
            });
        }
    }    

});