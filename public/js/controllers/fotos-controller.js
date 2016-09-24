angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.filtro = '';

    let url = "v1/fotos";
    $http.get(url)
    .success(function(fotos) {
        $scope.fotos = fotos;
    })
    .error(function(error) {
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

});