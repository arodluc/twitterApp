'use strict';

/* Controllers */

angular.module('myTwitterApp.controllers', []).
    controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.send = function (user) {

            $scope.user = user;
            $scope.app = {
                oauthToken : '276645185-2YXUVgc9ZMgxVCtGgER0Z6h6AFwaaceiXaHSFhkU'
            };

            $http.defaults.useXDomain = true;
            delete $http.defaults.headers.common['X-Requested-With'];

            $http({
                method: 'GET',
                url: 'https://api.twitter.com/oauth/authorize?oauth_token=' + $scope.app.oauthToken,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                dataType: 'jsonp',
                data: {
                    //'user': $scope.user.usuario,
                    //'password': $scope.user.password
                    force_login: true
                }
            }).
                success(function (data, status) {
                    $scope.data = data;
                    if (!data) {
                        $scope.aviso = 'Usuario o contraseña invalidos';
                    }

                }).
                error(function (data, status) {
                    $scope.data = data;
                    $scope.status = status;
                    $scope.aviso = 'Ha pasado algo inesperado';
                });
        };
    }])

    .controller('MyCtrl2', [function () {

    }]);