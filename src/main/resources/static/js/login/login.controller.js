/**
 * Created by shaunn on 4/12/2015.
 */
(function () {
    'use strict';

    angular.module('app').controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$mdToast'];

    function LoginController($location, $mdToast) {
        var _toast = $mdToast.simple().content('Invalid credentials.').position('top right');
        var _hasError = $location.search().error;

        if (_hasError) {
            $mdToast.show(_toast);
        }
    }
})();