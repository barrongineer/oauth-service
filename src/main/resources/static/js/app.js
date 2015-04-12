/**
 * Created by shaunn on 4/12/2015.
 */
(function () {
    'use strict';

    angular.module('app', ['ngMaterial'])
        .config(['$mdThemingProvider', '$locationProvider', function ($mdThemingProvider, $locationProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('cyan')
                .accentPalette('deep-orange');

            $locationProvider.html5Mode({enabled: true, requireBase: false});
        }]);
})();