/**
 * m_alltowns
 */

var app = angular.module('alltowns', []);

app.directive('alltowns', function() {
  return {
    templateUrl: 'm_alltowns/alltowns.html',
    restrict: 'E'
  }
});